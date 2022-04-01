import {Component, Input, OnInit} from '@angular/core';
import {SelectedConversationModel} from "../../../models/conversation.model";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @Input() selectedConversation: SelectedConversationModel | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
