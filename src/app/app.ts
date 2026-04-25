import { Component, AfterViewInit, NgZone, signal } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { Header } from "./components/header/header";
import { Footer } from './components/footer/footer';

declare var $: any;
declare var WOW: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('diplomado');
  isAdminRoute = false;

  constructor(
    private router: Router,
    private ngZone: NgZone
  ) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isAdminRoute = event.urlAfterRedirects.startsWith('/admin');
      });
  }

  ngAfterViewInit(): void {
    this.initTemplateScripts();

    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        setTimeout(() => {
          this.initTemplateScripts();
        }, 300);
      });
  }

  private initTemplateScripts(): void {
    this.ngZone.runOutsideAngular(() => {
      setTimeout(() => {
        this.initWow();
        this.initOwlCarousel();
        this.initAccordion();
      }, 300);
    });
  }

  private initWow(): void {
    if (typeof WOW !== 'undefined') {
      new WOW().init();
    }
  }

  private initOwlCarousel(): void {
    if (typeof $ === 'undefined') return;

    $('.owl-carousel').each(function (this: HTMLElement) {
  const carousel = $(this);

      if (carousel.hasClass('owl-loaded')) {
        carousel.trigger('destroy.owl.carousel');
        carousel.removeClass('owl-loaded owl-drag');
        carousel.find('.owl-stage-outer').children().unwrap();
      }

      carousel.owlCarousel({
        loop: carousel.data('loop') ?? true,
        margin: Number(carousel.data('margin')) || 30,
        nav: carousel.data('nav') === true || carousel.data('nav') === 'true',
        dots: carousel.data('dots') === true || carousel.data('dots') === 'true',
        autoplay: carousel.data('autoplay') === true || carousel.data('autoplay') === 'true',
        autoWidth: carousel.data('autowidth') === true || carousel.data('autowidth') === 'true',
        responsive: {
          0: {
            items: Number(carousel.data('mob_sm')) || 1
          },
          576: {
            items: Number(carousel.data('mob_num')) || 1
          },
          768: {
            items: Number(carousel.data('tab_num')) || 2
          },
          992: {
            items: Number(carousel.data('lap_num')) || 3
          },
          1200: {
            items: Number(carousel.data('desk_num')) || 4
          }
        }
      });
    });
  }

  private initAccordion(): void {
    if (typeof $ === 'undefined') return;

    $('.pq-ad-title').off('click').on('click', function (this: HTMLElement) {
  const box = $(this).closest('.pq-accordion-box');

      box.toggleClass('active');
      box.find('.pq-accordion-details').slideToggle();

      box.find('.ti-plus').toggleClass('active inactive');
      box.find('.ti-minus').toggleClass('active inactive');
    });
  }
}