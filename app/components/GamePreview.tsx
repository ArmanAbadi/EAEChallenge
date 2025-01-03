'use client'
import React from 'react'
import Link from 'next/link'
import { UrlObject } from 'url'

const GamePreview = (GamePreviewImageAndLinkProps: GamePreviewImageAndLinkProps) => {
  return (

    <div className="card w-96 shadow-xl text-black brightColor">
  <figure>
    <Link href={GamePreviewImageAndLinkProps.GameLink}>
    <img src={String(GamePreviewImageAndLinkProps.ImageLink)} />
    </Link>
    </figure>
  <div className="card-body">
    <h2 className="card-title text-2x1">{GamePreviewImageAndLinkProps.GameName}</h2>
    <p className="text-xl">{GamePreviewImageAndLinkProps.GameDescription}</p>
    <div className="card-actions justify-end">
    <Link href={GamePreviewImageAndLinkProps.GameLink}>
      <div className="justify-center brightColor">
        <button className="btn">Play<svg width="20" height="20" viewBox="0 0 65 72" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="20" height="20" fill="#F5F5F5"/>
<path d="M59.75 44.2272L14.75 70.208C8.41667 73.8646 0.5 69.2939 0.5 61.9808V10.0192C0.5 2.70614 8.41666 -1.86455 14.75 1.792L59.75 27.7728C66.0833 31.4293 66.0833 40.5707 59.75 44.2272Z" fill="white" stroke="black"/>
</svg>
        </button>
      </div>
    </Link>
    </div>
  </div>
</div>
  )
}

interface GamePreviewImageAndLinkProps {
    ImageLink: string,
    GameLink: string,
    GameName: string,
    GameDescription: string
  }

export default GamePreview