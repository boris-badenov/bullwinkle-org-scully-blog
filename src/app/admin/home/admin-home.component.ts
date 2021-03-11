import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit, RendererFactory2 } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  private renderer2;
  constructor(private rendererFactory2: RendererFactory2, @Inject(DOCUMENT) private document: Document) {
    this.renderer2 = this.rendererFactory2.createRenderer(null, null);
  }
  ngOnInit(): void {
    const script: HTMLScriptElement = this.renderer2.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js`;
    script.text = '';
    this.renderer2.appendChild(this.document.body, script);
  }
}
