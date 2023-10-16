import { MessageService } from './message.service';

describe('MessageService', () => {
  let msgService: MessageService;
  beforeEach(() => {
    msgService = new MessageService();
  });
  it('test that messages array is empty',()=>{
      expect(msgService.messages.length).toBe(0)
  })
  it('test add function',()=>{
      msgService.add('new message');
      expect(msgService.messages.length).toBe(1)
  })
  it('testing clear function',()=>{
      msgService.add('message 1')
      msgService.add('message 2')
      msgService.add('message 3')
      msgService.clear()
      expect(msgService.messages.length).toBe(0)
  })


});
