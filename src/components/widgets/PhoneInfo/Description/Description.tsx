/* eslint-disable max-len */
import { FC } from 'react';

type TDescriptionProps = object;

export const Description: FC<TDescriptionProps> = () => {
  return (
    <>
      <div className="flex flex-col resp-[gap/32/32]">
        <div className="">
          <div className="title-3 resp-[mb/16/16]">About</div>
          <div className="block border-b-[1px] border-elements w-full resp-[mb/32/32]"></div>
          <div>
            A transformative triple‑camera system that adds tons of capability
            without complexity.
            <br />
            <br />
            An unprecedented leap in battery life. And a mind‑blowing chip that
            doubles down on machine learning and pushes the boundaries of what a
            smartphone can do. Welcome to the first iPhone powerful enough to be
            called Pro.
          </div>
        </div>
        <div className="">
          <div className="title-3 resp-[mb/16/16]">And then there was Pro</div>
          <div>
            A transformative triple‑camera system that adds tons of capability
            without complexity.
            <br />
            <br />
            An unprecedented leap in battery life. And a mind‑blowing chip that
            doubles down on machine learning and pushes the boundaries of what a
            smartphone can do. Welcome to the first iPhone powerful enough to be
            called Pro.
          </div>
        </div>

        <div className="">
          <div className="title-3 resp-[mb/16/16]">Camera</div>
          <div>
            Meet the first triple‑camera system to combine cutting‑edge
            technology with the legendary simplicity of iPhone. Capture up to
            four times more scene. Get beautiful images in drastically lower
            light. Shoot the highest‑quality video in a smartphone — then edit
            with the same tools you love for photos. You’ve never shot with
            anything like it.
          </div>
        </div>

        <div className="">
          <div className="title-3 resp-[mb/16/16]">
            Shoot it. Flip it. Zoom it. Crop it. Cut it. Light it. Tweak it.
            Love it.
          </div>
          <div>
            iPhone 11 Pro lets you capture videos that are beautifully true to
            life, with greater detail and smoother motion. Epic processing power
            means it can shoot 4K video with extended dynamic range and
            cinematic video stabilization — all at 60 fps. You get more creative
            control, too, with four times more scene and powerful new editing
            tools to play with.
          </div>
        </div>
      </div>
    </>
  );
};
