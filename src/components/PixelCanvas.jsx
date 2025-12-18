import React, { useEffect, useRef } from 'react';

function pixelateCanvas(canvas, imgSrc, pixelSize = 18) {
  const img = new Image();
  img.crossOrigin = 'anonymous';
  img.onload = () => {
    const w = canvas.width;
    const h = canvas.height;
    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) return;

    const ar = img.width / img.height;
    const car = w / h;
    let sx = 0, sy = 0, sw = img.width, sh = img.height;

    if (ar > car) {
      sw = img.height * car;
      sx = (img.width - sw) / 2;
    } else {
      sh = img.width / car;
      sy = (img.height - sh) / 2;
    }

    const dw = Math.max(1, Math.floor(w / pixelSize));
    const dh = Math.max(1, Math.floor(h / pixelSize));

    const tmp = document.createElement('canvas');
    tmp.width = dw;
    tmp.height = dh;

    const tctx = tmp.getContext('2d', { willReadFrequently: true });
    if (!tctx) return;

    tctx.imageSmoothingEnabled = false;
    tctx.drawImage(img, sx, sy, sw, sh, 0, 0, dw, dh);

    ctx.imageSmoothingEnabled = false;
    ctx.clearRect(0, 0, w, h);
    ctx.filter = 'grayscale(100%) contrast(1.12) brightness(.95)';
    ctx.drawImage(tmp, 0, 0, dw, dh, 0, 0, w, h);
    ctx.filter = 'none';
  };
  img.src = imgSrc;
}

export default function PixelCanvas({ src, pixel = 18, width = 900, height = 900, className = 'pixelCanvas' }) {
  const ref = useRef(null);

  useEffect(() => {
    const c = ref.current;
    if (!c || !src) return;
    pixelateCanvas(c, src, pixel);
  }, [src, pixel]);

  return <canvas ref={ref} className={className} width={width} height={height} />;
}
