@extends('layouts.auth')
@section('content')
<div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
        <form class="form-horizontal" method="POST" action="{{ route('password.email') }}">
        {{ csrf_field() }}
            <div class="mdc-card authContainer">
              <section class="mdc-card__primary">
                <h1 class="mdc-card__title mdc-card__title--large">Reset Password</h1>
                <h2 class="mdc-card__subtitle">Please provide email address to continue.</h2>
              </section>
              <section class="mdc-card__supporting-text">
                    @if (session('status'))
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
                    @endif
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

              </section>
              <section class="mdc-card__actions">
                <button type="submit" class="mdc-button mdc-button--compact mdc-card__action mdc-button--primary">Send Password Reset Link</button>
                <a class="mdc-button mdc-button--compact mdc-card__action" href="/">Cancel</a>
              </section>
            </div>
        </form>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
  </div>
</div>
@endsection
