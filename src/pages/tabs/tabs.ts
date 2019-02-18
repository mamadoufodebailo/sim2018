import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import {ActualitePage} from "../actualite/actualite";
import {PartenairePage} from "../partenaire/partenaire";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ActualitePage;
  tab3Root = PartenairePage;
  tab4Root = ContactPage;

  constructor() {

  }
}
