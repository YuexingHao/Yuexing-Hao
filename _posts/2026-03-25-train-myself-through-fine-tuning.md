---
layout: blog-post
title: "Train Myself through Fine-Tuning"
date: 2026-03-25
author: Yuexing Hao
tags: [Personal]
description: "Train Myself through Fine-Tuning"
featured_image: /Yuexing-Hao/assets/posts/2026-03-25-myself-fine-tuning/Animations.gif
published: true
---

These past months have been consumed by interview preparation, a process that is busy, chaotic, and messy. I've experienced many first-round rejections and several disappointments after completing full loops, often receiving nothing more than a "no" without explanation. This experience has led me to conceptualize myself as a fine-tuning model: I obtained pre-training through school, internships, and friendships, but transforming myself into a competitive candidate clearly requires reinforcement learning from human feedback (RLHF).

## Reframing Rejection as Training Signal

As an interviewee, rejection feels sucks. Especially thinking about I cannot interview again for this amazing company after the first simple coding round, it is very discouraging. But as a model, I find negative rewards exciting because they are rare and valuable. Rather than avoiding these signals, I actively learn from them. For instance, I have historically avoided depth-first search and dynamic programming problems, but these interview failures revealed critical knowledge gaps that I could not ignore. 

<div style="display: flex; flex-direction: row; gap: 24px; margin: 24px 0; align-items: flex-start; flex-wrap: wrap;">
  <p style="flex: 1 1 280px; margin: 0; line-height: 1.65;">
    I still remember the awkward moments when my mind went blank. Sometimes I didn’t know how to respond to terms I’d never heard before and didn’t want to look stupid. When I got too nervous, I even struggled to understand the question, and I felt like a monkey performing in front of an audience. The interviewer’s silence could be especially painful. As my friend joked, interviews can feel like torture or humiliation, and I agree.
  </p>
  <img src="/Yuexing-Hao/assets/posts/2026-03-25-myself-fine-tuning/Monkey_Acting_Zoo.gif" alt="Dr. Hao on Pen" style="flex: 0 0 auto; width: 200px; max-width: 42%; min-width: 140px; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>

Still, these rejections are useful training signals, and early in a career they don’t matter that much. I often think about what my grandma said: out of 10 things, 8 or 9 won’t be satisfying. The solution is to do 20, 50, 100, or 1000, and then the disappointing outcomes matter less. That mindset helped me a lot during my Ph.D.

At the same time, short-term rewards also matter. They keep me mentally and physically moving instead of doubting myself for too long. There’s no one to blame. I just need to adjust my training pipeline, again.

## Applying Modern Training Techniques to Self-Improvement

At some point, I reframed the whole process from an outcome reward model (ORM) to a process reward model (PRM). Once I set aside the final “rejected” outcome and focused on the process, I could see many small positive and negative reward signals. There’s no ground truth for these rewards, so I have to assign them myself, almost like creating a sub-agent that grades me as objectively as possible. For example, in one coding interview, I didn’t pay enough attention to the O(1) requirement and instead focused on making unit tests pass. In another, I spent too long trying to frame the problem as a linear instead of a 2D DP problem, even when the interviewer repeatedly asked me to step back and rethink. In those moments, I was failing because I was being stubborn and trying to “reward hack”: optimizing for passing quickly rather than understanding the real goal the interviewer was testing.

In that sense, fine-tuning LLMs today feels surprisingly similar to human self-improvement. The algorithms can also apply to human. There are strong training approaches like DPO (Direct Policy Optimization, learning from paired winning/losing examples) and GRPO (Group Relative Policy Optimization, where the model generates multiple responses, ranks them, and learns preferences). I’ve been training myself in a DPO-like way too: every time I do LeetCode, I force myself to write an answer even if I have no clue, at least I write down some thought process. Then I compare my non-working code with the correct solution and learn from the pair. This highlights exactly where I’m missing concepts, or where I’m close but still making small, critical mistakes. Sometimes I train in a GRPO-like way: I try multiple solution strategies, then figure out why the earlier approaches fail and why the final one works. It’s continual learning from my own generated mistakes.

I am grateful for the interviewers and bearing with my bad interviews (almost 50 interviews in total wow!). I really hope they can give me some questions that I am good at for example "Max Area of Islands" or "Top K Frequent Elements" but unfortunately I always got questions that I am not good at :D 

## Objective Evaluation Over Emotional Interpretation

I also hope I can learn from this process more objectively, like a model, so my mood isn’t overly affected by temporary rejection or a low score. I’m fortunate to be surrounded by friends who are also going through the same tough job market, complaining about hard questions and interviews where we performed poorly. That helps me maintain mental stability and physical health, so the “Yuexing-LLM” has a chance to improve. 

If I map this to fine-tuning/post-training, I still need compute (good mood, healthy body), data (NeetCode, deeplearning.ai, etc.), labelers (real interviews, mock interviews), and time (iterations of preparation and interviews). To reach a high level on a task, almost every model needs post-training; very few pre-trained models can match a post-trained model. (Similarly, a Ph.D. student with strong papers but no interview-specific preparation can still struggle badly in interviews.)

## The Power of Objective Metrics

Quantify the failures through loss function is also a good way to measure improvements. I can see my loss function decreases per iteration, after batches of interviews (consider each interview as a labeler grading my performance). Sometimes loss is huge, for example after an interview, I finally spend time to look at trie structure and think more about how importance sampling's roll out work. Sometimes loss is small, for example I complete the coding question but the interviewer asks me to optimize my time complexity and I don't know how to deal with that. But generally the loss curve is promising. Though I failed in many interviews, 3 months ago and 3 months later the result is still the same, but the model's capability is improving significantly.

I think having an objective reward model is important. I’ve become less emotionally affected by reviewer comments on my papers—not only because I’ve graduated and papers feel less central than before, but also because I can often agree with the comments without letting them define the paper’s value. I care-LESS about what others think in the moment, and care-MORE about what I want the work to become. Viewing negative reward signals objectively helps me learn faster.

As a human, I’m also good at overthinking (interpreting a calm interviewer as someone who dislikes me) and hallucinating (thinking I’m about to get the job because someone says “we’re looking forward to having you on our team”). I’m trying to focus more on task completion and less on factors outside my control.

Well, hope you accept my arguments that training human as fine-tuning is actually feasible and also a good way to improve and learn. Many reinforcement learning algorithms were developed through decades of work by brilliant researchers and engineers. In a smaller, more personal way, I think the same logic translates to human improvement: early batches are rough, performance is low, and progress is slow. But after enough iterations (enough failures, enough low scores) the curve can start trending upward. It’s not luck. It’s training: gradually aligning yourself toward success. And early on, the path (the reward model) is unknown. No ones knows what to prioritize or what to deprioritize, because the real problem is interdisciplinary and complex.

Thanks for your reading. 

YH. (The meaningful pen is gifted from my amazing collaborator [Dr. Hyewon Jeong](https://sites.google.com/view/hyewon-jeong/) for my dissertation)

<div style="display: flex; gap: 20px; margin: 30px 0; justify-content: center; flex-wrap: wrap;">
  <img src="/Yuexing-Hao/assets/posts/2026-03-25-myself-fine-tuning/featured.jpg" alt="Dr. Hao on Pen" style="width: 20%; min-width: 180px; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
</div>