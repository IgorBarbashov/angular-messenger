import { Component, Input, OnInit } from '@angular/core';
import { ConversationMessageModel } from "../../../models/message.model";

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {
  @Input() message: ConversationMessageModel | null = null;

  constructor() { }

  ngOnInit(): void {
  }

}
