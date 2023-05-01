import React from 'react';
import { Prompt } from '@pages/content/types';

interface PromptCardProps {
  prompt: Prompt;
}

const classList = ['w-full', 'p-3', 'rounded-md'];
const PromptCard = ({ prompt }: PromptCardProps) => {
  const {
    promptUuid,
    originalPromptUuid,
    hit,
    example,
    likeCnt,
    title,
    prefix,
    regDt,
    suffix,
    updDt,
    description,
    category,
  } = prompt;

  return (
    <li className={`ZP_prompt-container__prompt-card ${classList.join(' ')}`}>
      <article>
        <div>
          <div>
            <h3>{prompt.title}</h3>
            <div>포크</div>
          </div>
          <div>
            <p>{prompt.description}</p>
          </div>
          <div>
            <p>2023년 04월 24일</p>
            <p>19개의 댓글</p>
            <p>10개의 Talk</p>
          </div>
        </div>
        <div>
          <div>프로필</div>
          <div>
            <div>좋아요</div>
            <div>북마크</div>
          </div>
        </div>
      </article>
    </li>
  );
};

export default PromptCard;