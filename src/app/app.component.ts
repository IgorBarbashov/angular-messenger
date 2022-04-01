import { Component } from '@angular/core';
import { BaseConversationModel, SelectedConversationModel } from "../models/conversation.model";
import { selectedConversationsMock } from '../mocks/selected-conversations.mock';
import { MessageSendRequestModel } from "../models/message.model";
import { currentUserMock } from "../mocks/current-user.mock";

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

  onPostMessage(message: MessageSendRequestModel) {
    this.selectedConversation?.messages.push({
      recipient: message.recipient,
      sender: currentUserMock.id,
      timestamp: new Date().toISOString(),
      message: message.message,
      id: 'id-111'
    });
  }
}
