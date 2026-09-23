// CIMEA Assistant Pro - Client Content Script
// Developed by Mohammad Nomer

(function () {
  'use strict';

  const DEVELOPER_INFO = {
    name: 'Mohammad Nomer',
    title: 'CIMEA Automation & Workflow Specialist',
    phone: '01144413637',
    intlPhone: '+20 114 441 3637',
    email: 'mohammadnomer2030@gmail.com',
    version: '1.0.0'
  };

  // Styled console branding on page load
  console.log(
    '%c' +
    '======================================================\n' +
    '  🚀 CIMEA Assistant Pro v' + DEVELOPER_INFO.version + '\n' +
    '  Automated Portal Helper & Workflow Assistant\n' +
    '------------------------------------------------------\n' +
    '  👤 Developer: ' + DEVELOPER_INFO.name + '\n' +
    '  📞 Phone:     ' + DEVELOPER_INFO.phone + ' (' + DEVELOPER_INFO.intlPhone + ')\n' +
    '  ✉️ Email:     ' + DEVELOPER_INFO.email + '\n' +
    '======================================================',
    'color: #00d2ff; font-weight: bold; font-family: monospace; font-size: 13px;'
  );

  // Floating helper badge on the portal
  function injectHelperBadge() {
    if (document.getElementById('cimea-assistant-badge')) return;

    const badge = document.createElement('div');
    badge.id = 'cimea-assistant-badge';
    badge.innerHTML = `
      <div style="
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: linear-gradient(135deg, #1e293b, #0f172a);
        color: #f8fafc;
        border: 1px solid #38bdf8;
        border-radius: 12px;
        padding: 14px 18px;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        font-size: 12px;
        box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.4);
        z-index: 999999;
        display: flex;
        flex-direction: column;
        gap: 8px;
        max-width: 300px;
        direction: ltr;
        text-align: left;
      ">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #334155; padding-bottom: 6px;">
          <div style="display: flex; align-items: center; gap: 6px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #22c55e;"></span>
            <span style="font-weight: 700; color: #38bdf8; font-size: 13px;">CIMEA Assistant Pro</span>
          </div>
          <span id="close-cimea-badge" style="cursor: pointer; color: #94a3b8; font-size: 14px; font-weight: bold; padding: 0 4px;">✕</span>
        </div>
        <div style="color: #cbd5e1; line-height: 1.5; font-size: 11px;">
          Smart workflow helper active for CIMEA DiploMe.<br>
          <strong>Developer:</strong> Mohammad Nomer<br>
          <strong>Phone:</strong> <a href="tel:01144413637" style="color: #38bdf8; text-decoration: none;">01144413637</a> (+20 114 441 3637)<br>
          <strong>Email:</strong> <a href="mailto:mohammadnomer2030@gmail.com" style="color: #38bdf8; text-decoration: none;">mohammadnomer2030@gmail.com</a>
        </div>
      </div>
    `;

    document.body.appendChild(badge);

    const closeBtn = document.getElementById('close-cimea-badge');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => badge.remove());
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', injectHelperBadge);
  } else {
    injectHelperBadge();
  }
})();
