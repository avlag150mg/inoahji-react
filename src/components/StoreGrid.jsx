import React from 'react';
import data from '../data/data.json';

function normalizeImgPath(p) {
  if (!p) return p;
  if (p.startsWith('http://') || p.startsWith('https://') || p.startsWith('/')) return p;
  // original project uses "assets/..."
  return `/${p}`;
}

export default function StoreGrid() {
  const list = data?.products ?? [];

  return (
    <div className="storeGrid">
      {list.map((p) => (
        <div className="item" key={p.id}>
          <div className="item__img">
            <img src={normalizeImgPath(p.img)} alt={(p.name || '').replaceAll('\n', ' ')} />
          </div>
          <div className="item__name">
            {(p.name || '').split('\n').map((line, i) => (
              <React.Fragment key={i}>
                {line}
                {i < (p.name || '').split('\n').length - 1 ? <br /> : null}
              </React.Fragment>
            ))}
          </div>
          <p className="item__price">${p.price}</p>
        </div>
      ))}
    </div>
  );
}
