@extends('layouts.auth')

@section('content')
<div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
        <form class="form-horizontal" method="POST" action="{{ route('login') }}">
        {{ csrf_field() }}
            <div class="mdc-card authContainer">
              <section class="mdc-card__primary">
                <h1 class="mdc-card__title mdc-card__title--large">Login</h1>
                <h2 class="mdc-card__subtitle">Please provide credentials.</h2>
              </section>
              <section class="mdc-card__supporting-text">
                        <div class="mdc-textfield full-width {{ $errors->has('email') ? ' mdc-textfield--invalid' : '' }}" data-mdc-auto-init="MDCTextfield">
                          <input type="email" class="mdc-textfield__input" id="email" name="email" value="{{ old('email') }}" required autofocus>
                          <label for="email" class="mdc-textfield__label">Email</label>
                        </div>
                        @if ($errors->has('email'))
                        <p class="mdc-textfield-helptext
                                  mdc-textfield-helptext--persistent
                                  mdc-textfield-helptext--validation-msg"
                           id="pw-validation-msg">
                          {{ $errors->first('email') }}
                        </p>
                        @endif 
                        
                        <div class="mdc-textfield full-width {{ $errors->has('password') ? ' mdc-textfield--invalid' : '' }}" data-mdc-auto-init="MDCTextfield">
                          <input type="password" class="mdc-textfield__input" id="password" name="password" required autofocus>
                          <label for="email" class="mdc-textfield__label">Password</label>
                        </div>    
                        @if ($errors->has('password'))
                             <p class="mdc-textfield-helptext
                                      mdc-textfield-helptext--persistent
                                      mdc-textfield-helptext--validation-msg"
                               id="pw-validation-msg">
                              {{ $errors->first('password') }}
                            </p>
                        @endif
                            
                        <p>
                            <div class="mdc-form-field">
                              <div class="mdc-checkbox">
                                <input type="checkbox"
                                       id="my-checkbox"
                                       class="mdc-checkbox__native-control" name="remember" {{ old('remember') ? 'checked' : '' }}/>
                                <div class="mdc-checkbox__background">
                                  <svg class="mdc-checkbox__checkmark"
                                       viewBox="0 0 24 24">
                                    <path class="mdc-checkbox__checkmark__path"
                                          fill="none"
                                          stroke="white"
                                          d="M1.73,12.91 8.1,19.28 22.79,4.59"/>
                                  </svg>
                                  <div class="mdc-checkbox__mixedmark"></div>
                                </div>
                              </div>

                              <label for="my-checkbox">Remember Me</label>
                            </div>
                        </p>


              </section>
              <section class="mdc-card__actions">
                <button type="submit" class="mdc-button mdc-button--compact mdc-card__action mdc-button--primary">Login</button>
                <a class="mdc-button mdc-button--compact mdc-card__action" href="{{ route('password.request') }}">Forgot Your Password?</a>
              </section>
            </div>
        </form>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
  </div>
</div>
@endsection

