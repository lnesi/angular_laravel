@extends('layouts.auth')
@section('content')
    <div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
        <form class="form-horizontal" method="POST" action="{{ route('register') }}">
        {{ csrf_field() }}
            <div class="mdc-card authContainer">
              <section class="mdc-card__primary">
                <h1 class="mdc-card__title mdc-card__title--large">Register</h1>
                <h2 class="mdc-card__subtitle">Please provide the information below.</h2>
              </section>
              <section class="mdc-card__supporting-text">
                    
                    <div class="mdc-textfield full-width {{ $errors->has('name') ? ' mdc-textfield--invalid' : '' }}" data-mdc-auto-init="MDCTextfield">
                          <input type="name" class="mdc-textfield__input" id="name" value="{{ old('name') }}" name="name" required autofocus>
                          <label for="name" class="mdc-textfield__label">Name</label>
                        </div>
                        @if ($errors->has('name'))
                        <p class="mdc-textfield-helptext
                                  mdc-textfield-helptext--persistent
                                  mdc-textfield-helptext--validation-msg"
                           id="pw-validation-msg">
                          {{ $errors->first('name') }}
                        </p>
                        @endif 

                        <div class="mdc-textfield full-width {{ $errors->has('email') ? ' mdc-textfield--invalid' : '' }}" data-mdc-auto-init="MDCTextfield">
                          <input type="email" class="mdc-textfield__input" id="email" value="{{ old('email') }}" name="email" required autofocus>
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

                         <div class="mdc-textfield full-width {{ $errors->has('password_confirmation') ? ' mdc-textfield--invalid' : '' }}" data-mdc-auto-init="MDCTextfield">
                          <input type="password" class="mdc-textfield__input" id="password_confirmation" name="password_confirmation" required autofocus>
                          <label for="email" class="mdc-textfield__label">Confirm Password</label>
                        </div>    
                        @if ($errors->has('password'))
                             <p class="mdc-textfield-helptext
                                      mdc-textfield-helptext--persistent
                                      mdc-textfield-helptext--validation-msg"
                               id="pw-validation-msg">
                              {{ $errors->first('password_confirmation') }}
                            </p>
                        @endif
              </section>
              <section class="mdc-card__actions">
                <button type="submit" class="mdc-button mdc-button--compact mdc-card__action mdc-button--primary">Register</button>
                <a class="mdc-button mdc-button--compact mdc-card__action" href="/">Cancel</a>
              </section>
            </div>
        </form>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
  </div>
</div>
@endsection
