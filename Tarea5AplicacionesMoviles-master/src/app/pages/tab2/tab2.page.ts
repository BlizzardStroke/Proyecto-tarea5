import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  
  messages = [
    {
      user: 'Simon',
      createdAt: 15528399123,
      msg: 'Oigan no tomen el metro esta llenisimo'
    },
    {
      user: 'Olga',
      createdAt: 15528399123,
      msg: 'Alguien que tenga tapa-bocas!'
    },
    {
      user: 'Luis',
      createdAt: 15528399123,
      msg: 'Auxilioooooooooooooooooo'
    },
    {
      user: 'Karen',
      createdAt: 15528399123,
      msg: 'Wuenas como estaaan?'
    },
    {
      user: 'Beto',
      createdAt: 15528399123,
      msg: 'no oigan caso harriba, ez hinvento i mentiraz '
    },
  ];

  currentUser = 'Luis';
  newMsg = '';
  @ViewChild(IonContent,{static:false}) content: IonContent;

  constructor() {}


  sendMessage() {
    this.messages.push({
      user: 'Luis',
      createdAt: new Date().getTime(),
      msg: this.newMsg
    });

    this.newMsg = '';
    setTimeout(() => {
      this.content.scrollToBottom(200);
    });
  }
}
