import { Component } from '@angular/core';
import { BaseConversationModel, SelectedConversationModel } from "../models/conversation.model";
import { selectedConversationsMock } from '../mocks/selected-conversations.mock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-messenger';
  selectedConversation: SelectedConversationModel | undefined;

  onSelectConversation(conversation: BaseConversationModel) {
    this.selectedConversation = selectedConversationsMock.find(el => el.id === conversation.id);
  }
}
