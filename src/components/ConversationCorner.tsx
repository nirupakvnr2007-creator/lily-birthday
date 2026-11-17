import React, { useState } from 'react';
import { MessageCircle, RotateCcw } from 'lucide-react';
import type { ChatMessage, ChatReplyOption } from '../types/birthday.ts';

interface ConversationCornerProps {
  title: string;
  disclaimer: string;
  contactName: string;
  contactSubtitle: string;
  initialMessages: ChatMessage[];
  replyOptions: ChatReplyOption[];
}

export function ConversationCorner({
  title,
  disclaimer,
  contactName,
  contactSubtitle,
  initialMessages,
  replyOptions,
}: ConversationCornerProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [usedReplies, setUsedReplies] = useState<string[]>([]);

  const handleReply = (option: ChatReplyOption) => {
    if (usedReplies.includes(option.id)) return;
    setUsedReplies((prev) => [...prev, option.id]);
    setMessages((prev) => [
      ...prev,
      {
        id: `lily-${option.id}`,
        sender: 'lily',
        text: option.lilyText,
        timeLabel: 'Lily',
      },
      {
        id: `friend-${option.id}`,
        sender: 'friend',
        text: option.friendResponse,
        timeLabel: 'Just now',
      },
    ]);
  };

  const handleReset = () => {
    setMessages(initialMessages);
    setUsedReplies([]);
  };

  return (
    <section className="border-b border-[#E8C2D4]/60 bg-[#DCCEF4]/25 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-xs font-medium tracking-widest text-[#9C6580] uppercase">
            Conversation Corner
          </p>
          <h2 className="mt-2 font-serif text-3xl font-semibold text-[#3B1E2D] sm:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-xs text-[#6E4A5D]">{disclaimer}</p>
        </div>

        {/* Simulated WhatsApp-inspired Frame */}
        <div className="mt-10 overflow-hidden rounded-2xl border border-[#E8C2D4] bg-[#FFFDF9] shadow-sm">
          {/* Chat header */}
          <div className="flex items-center justify-between border-b border-[#E8C2D4]/70 bg-[#FCE7F0] px-5 py-3.5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#9C6580] font-serif text-lg font-semibold text-white">
                L
              </div>
              <div>
                <h3 className="font-sans text-sm font-semibold text-[#3B1E2D]">
                  {contactName} &amp; Her School Friend
                </h3>
                <p className="text-xs text-[#6E4A5D]">{contactSubtitle}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={handleReset}
              className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg border border-[#E8C2D4] bg-white px-3 py-1 text-xs font-medium text-[#3B1E2D] hover:bg-[#FFF6EF]"
            >
              <RotateCcw className="h-3.5 w-3.5 text-[#9C6580]" aria-hidden="true" />
              <span>Replay</span>
            </button>
          </div>

          {/* Chat messages */}
          <div className="space-y-3.5 bg-[#FFF6EF]/70 p-5 sm:p-6">
            {messages.map((msg) => {
              const isFriend = msg.sender === 'friend';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isFriend ? 'items-start' : 'items-end'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed sm:max-w-[75%] ${
                      isFriend
                        ? 'rounded-tl-xs border border-[#E8C2D4]/80 bg-white text-[#3B1E2D]'
                        : 'rounded-tr-xs bg-[#9C6580] text-white'
                    }`}
                  >
                    <p>{msg.text}</p>
                  </div>
                  <span className="mt-1 px-1 text-[11px] text-[#6E4A5D]">{msg.timeLabel}</span>
                </div>
              );
            })}
          </div>

          {/* Interactive reply prompts */}
          <div className="border-t border-[#E8C2D4]/70 bg-white px-5 py-4">
            <p className="mb-2.5 flex items-center gap-1.5 text-xs font-medium text-[#6E4A5D]">
              <MessageCircle className="h-3.5 w-3.5 text-[#9C6580]" aria-hidden="true" />
              <span>Tap a scripted reply to continue the daydream:</span>
            </p>
            <div className="flex flex-wrap gap-2">
              {replyOptions.map((opt) => {
                const alreadySent = usedReplies.includes(opt.id);
                return (
                  <button
                    key={opt.id}
                    type="button"
                    disabled={alreadySent}
                    onClick={() => handleReply(opt)}
                    className="cursor-pointer rounded-xl border border-[#E8C2D4] bg-[#FCE7F0]/60 px-3.5 py-2 text-left text-xs font-medium text-[#3B1E2D] transition-colors hover:bg-[#FCE7F0] disabled:cursor-default disabled:opacity-45"
                  >
                    {opt.lilyText}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
