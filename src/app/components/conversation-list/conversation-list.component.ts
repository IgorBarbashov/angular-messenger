import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {conversationListMock} from "../../../mocks/conversation-list.mock";
import {BaseConversationModel} from "../../../models/conversation.model";

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {
  list = conversationListMock;
  searchTerm: string = '';
  selectedConversationId: string = '';

  @Output() selectConversation = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSelectConversation(item: BaseConversationModel) {
    this.selectedConversationId = item.id;
    this.selectConversation.emit(item);
  }

  // лучше избегать вызовов методов component в template -
  // они будут выполняться при каждой проверке необходимости обновления template,
  // если есть необходимость в template вытянуть св-во component - лучше сделать pipe
  // getUser(conversation: BaseConversationModel): UserModel {
  //   return conversation.participants[1];
  // }
}
