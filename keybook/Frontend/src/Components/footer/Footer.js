import React from 'react';

export default function Footer() {
  return (
    <footer className="footer  mt-auto">
      <div className="text-center p-3">
        {new Date().getFullYear()} Keybook ©
        <a className="footer-url" href="https://github.com/Ensenada-group-4/Sprint2"> GitHub</a>
      </div>
    </footer>
  );
}

