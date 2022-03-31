import { Component, OnInit } from '@angular/core';
import {conversationListMock} from "../../../mocks/conversation-list.mock";

@Component({
  selector: 'app-conversation-list',
  templateUrl: './conversation-list.component.html',
  styleUrls: ['./conversation-list.component.scss']
})
export class ConversationListComponent implements OnInit {
  list = conversationListMock;

  constructor() { }

  ngOnInit(): void {
  }

}
