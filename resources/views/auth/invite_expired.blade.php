@extends('layouts.auth')

@section('content')
<div class="mdc-layout-grid">
  <div class="mdc-layout-grid__inner">
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-8">
            <div class="mdc-card authContainer">
              <section class="mdc-card__primary">
                <h1 class="mdc-card__title mdc-card__title--large">Invitation expired</h1>
              </section>
              <section class="mdc-card__supporting-text">
                  <p>The invitation code is expired please contact system administrator.</p>
              </section>
              <section class="mdc-card__actions">
                <a href="/" class="mdc-button mdc-button--compact mdc-card__action mdc-button--primary">Ok</a>
               
              </section>
            </div>
    </div>
    <div class="mdc-layout-grid__cell mdc-layout-grid__cell--span-2"></div>
  </div>
</div>
@endsection
