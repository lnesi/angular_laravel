<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use \App\User;
class UsersController extends ActivationAjaxController
{
  
    protected $modelClass=User::class;
    
    public function validateEmail(Request $request){
        $query=User::where('email',$request->input('email'));
        $user=$query->get();
        return response()->json(['result' => $user->count()==0]); 
    }
    
    public function store(Request $request){
        $user=new User($request->input());
        $user->password=bcrypt($request->input('password'));
        $user->save();
        return $user;
    }
    
    public function invite(Request $request){
        $user=new User($request->input());
        $user->password=bcrypt(str_random(10));
        $current = Carbon::now();
        $user->invite_token=base64_encode(Crypt::encryptString($user->email.":".$current->timestamp));
        $user->save();
        Mail::to($user)->send(new UserInvite($user));
        return $user;
    } 


    public function accept(Request $request, $token){
        try {
            $now = Carbon::now();
            $decrypted = Crypt::decryptString(base64_decode($token));
            $atoken=explode(":",$decrypted);
            $tokendate= Carbon::createFromTimestamp($atoken[1]);
            $diff=$tokendate->diffInMinutes($now);
            if($diff<=1440){ // 24 Hours
                $user=User::where(['email'=>$atoken[0]])->first();
                if($user){
                    if(!$user->active){
                        $user->active=true;
                        $user->invite_token=null;
                        $user->save();
                        $broker=Password::broker();
                        $broker->sendResetLink(['email'=>$atoken[0]]);
                        return view('auth.invite_ok');
                    }else{
                        return view('auth.invite_expired');
                    }
                    
                }else{
                    return view('auth.invite_invalid');
                }
                
            }else{
                return view('auth.invite_expired');
            }
           
        } catch (DecryptException $e) {
            return view('auth.invalid_invite');
        }
       
    }

    public function resendinvite(Request $request, $id){
        $user=User::findOrFail($id);
        $current = Carbon::now();
        $user->invite_token=base64_encode(Crypt::encryptString($user->email.":".$current->timestamp));
        $user->save();
        Mail::to($user)->send(new UserInvite($user));
    }



}
