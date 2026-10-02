// Selector de idioma ES / EN para todas las páginas de la web.
// El HTML está escrito en español; este archivo guarda la versión en inglés de cada texto.
// Cada elemento traducible lleva data-i18n="clave" (su contenido) o
// data-i18n-attr="atributo:clave;..." (por ejemplo alt, aria-label o content).
// Para cambiar una traducción, edita el texto en la lista EN de abajo.
(function(){
  var EN = {
    // Comunes
    'lang.label': 'Language',
    'foot.legal': 'Legal notice',
    'foot.privacy': 'Privacy',
    'foot.cookies': 'Cookies',
    'legal.back': '&larr; Back to the site',

    // Página principal
    'home.title': 'AUREplus | 24/7 virtual assistants for jewelers',
    'home.desc': 'AUREplus builds virtual assistants for jewelers: a 24/7 receptionist on WhatsApp, Instagram and your website that answers questions and sends photos of your pieces.',
    'nav.home': 'AUREplus, home',
    'nav.open': 'Open menu',
    'nav.close': 'Close menu',
    'nav.how': 'How it works',
    'nav.channels': 'Channels',
    'nav.faq': 'FAQ',
    'nav.cta': 'Free trial',

    'hero.eyebrow': 'AUREplus · Systems for jewelers',
    'hero.title': 'The luxury of being<br><em>always available</em>.',
    'hero.monogram': 'AUREplus monogram',
    'hero.f1': 'Always-on service',
    'hero.f2': 'WhatsApp, Instagram and web',
    'hero.f3': 'Jewelers only',
    'hero.scroll': 'Discover',

    'how.eyebrow': 'How it works',
    'how.title': 'We guide your customer every step of the way',
    'how.lead': 'The same care you would give in store, now after hours too.',
    'how.1t': 'Greets',
    'how.1p': 'Welcomes every customer with your store’s tone and personality, 7 days a week, at any hour.',
    'how.2t': 'Listens',
    'how.2p': 'Finds out what they are looking for (type of piece, occasion, material and budget) before giving any answer.',
    'how.3t': 'Shows',
    'how.3p': 'Picks and sends the pieces from your catalog that best match what the customer asked for, photos included.',
    'how.4t': 'Supports',
    'how.4p': 'Answers questions about price, warranty or availability calmly and accurately, without ever pushing.',
    'how.5t': 'Invites them in',
    'how.5p': 'When the conversation calls for it, suggests an appointment or a visit to see the piece in person.',
    'how.6t': 'Builds loyalty',
    'how.6p': 'Keeps the history of every conversation and follows up after the purchase, so the relationship doesn’t end there.',

    'ch.eyebrow': 'Channels',
    'ch.title': 'Where your customers already message you',
    'ch.wa': 'Handles the inquiries that reach your business number.',
    'ch.ig': 'Handles the direct messages that come in after people see your posts.',
    'ch.webt': 'Your website',
    'ch.web': 'An assistant built into your site for everyone who visits.',

    'why.eyebrow': 'Why AUREplus',
    'why.title': 'Designed to take care of the customer',
    'why.1t': 'Fewer unanswered inquiries',
    'why.1p': 'Messages that arrive after hours are no longer left waiting.',
    'why.2t': 'Trust and peace of mind',
    'why.2p': 'Buying jewelry is emotional and deserves patience.',
    'why.3t': 'More time for your team',
    'why.3p': 'Your staff can focus on what needs a human touch.',

    'faq.eyebrow': 'Frequently asked questions',
    'faq.title': 'What people usually ask us',
    'faq.1q': 'What is AUREplus?',
    'faq.1a': 'An automation agency that works exclusively with jewelers. We build virtual assistants that act as the receptionist for your store.',
    'faq.2q': 'Will the assistant try to sell at all costs?',
    'faq.2a': 'No. It is designed to guide, inform and build trust. Sales come as a result of good service.',
    'faq.3q': 'Can I give it any name I like?',
    'faq.3a': 'Yes. It can carry the name you choose, or none at all, and it will speak with your store’s tone and identity.',
    'faq.4q': 'What information can it give?',
    'faq.4a': 'Whatever you provide: your catalog, prices and availability. If it doesn’t know something, it doesn’t make it up: it passes it on to your team.',

    'cta.eyebrow': 'Get started',
    'cta.try': 'Try',
    'cta.free': 'free for 7 days',
    'cta.lead': 'A 7-day demo, completely free and with no commitment.',
    'cta.s1': 'You tell us about your store and how you talk to your customers.',
    'cta.s2': 'We design your assistant with your name, tone and catalog.',
    'cta.s3': 'We launch it on the channels you choose.',
    'book.title': 'Talk to one of our experts',
    'book.loading': 'Loading the calendar…',
    'book.slow': 'Not loading? Open it in a new tab',
    'book.iframe': 'Calendar to book a call',
    'book.text': 'Pick the day and time that suit you best and we’ll show you how the assistant would work in your store.',
    'book.open': 'See available times',
    'book.note': 'The calendar is provided by Calendly, which uses its own cookies once opened.',
    'book.newtab': 'Open the calendar in a new tab',

    // Aviso legal
    'legal.title': 'Legal notice | AUREplus',
    'legal.h1': 'Legal notice',
    'legal.intro': 'In compliance with Spanish Law 34/2002 on Information Society Services and Electronic Commerce (LSSI-CE), the following information is provided:',
    'legal.ownerH': 'Owner',
    'legal.owner': 'Elena Jiménez, trading as <strong>AUREplus</strong><br>\n    Tax ID (NIF): <span class="placeholder">[to be completed]</span><br>\n    Address: <span class="placeholder">[to be completed]</span>, Córdoba, Spain<br>\n    Contact email: <a href="mailto:contacto@aureplus.com">contacto@aureplus.com</a><br>\n    Activity: automation services using virtual assistants for jewelers',
    'legal.purposeH': 'Purpose',
    'legal.purpose': 'This website (aureplus.com) is intended to provide information about the services of AUREplus and to let users request a free demo.',
    'legal.ipH': 'Intellectual property',
    'legal.ip': 'The contents of this website (text, design, logo, images) belong to Elena Jiménez or are used with due authorization, and are protected by intellectual property law. "AUREplus" is a trade name that is not currently registered as a trademark.',
    'legal.useH': 'Terms of use',
    'legal.use': 'Access to this website is free of charge. Users agree to make appropriate use of its contents and not to use them for unlawful purposes.',
    'legal.lawH': 'Governing law',
    'legal.law': 'This legal notice is governed by Spanish law. Any dispute shall be submitted to the courts of Córdoba, unless the law provides otherwise.',

    // Privacidad
    'priv.title': 'Privacy policy | AUREplus',
    'priv.h1': 'Privacy policy',
    'priv.ctrlH': 'Data controller',
    'priv.owner': 'Elena Jiménez, trading as AUREplus<br>\n    Tax ID (NIF): <span class="placeholder">[to be completed]</span><br>\n    Address: <span class="placeholder">[to be completed]</span>, Córdoba, Spain<br>\n    Contact email: <a href="mailto:contacto@aureplus.com">contacto@aureplus.com</a>',
    'priv.dataH': 'Data we collect',
    'priv.data': 'When you book a demo through the calendar on this website, we receive the details you enter in Calendly: your name, your email and any answers you add when booking.',
    'priv.purposeH': 'Purpose',
    'priv.purpose': 'To manage your free demo booking and contact you to set up the service.',
    'priv.basisH': 'Legal basis',
    'priv.basis': 'The consent you give by voluntarily booking the demo.',
    'priv.keepH': 'Retention',
    'priv.keep': 'Your data will be kept for as long as there is a business relationship or until you ask for it to be deleted.',
    'priv.thirdH': 'Recipients and third parties',
    'priv.third': 'We use <strong>Calendly</strong> (appointment booking, a company based in the United States; see its <a href="https://calendly.com/privacy" target="_blank" rel="noopener">privacy policy</a>) and <strong>Vercel</strong> (web hosting) to run this website. We do not share your data with third parties for commercial purposes.',
    'priv.rightsH': 'Your rights',
    'priv.rights': 'You can exercise your rights of access, rectification, erasure, objection, restriction and portability by writing to <a href="mailto:contacto@aureplus.com">contacto@aureplus.com</a>. If you believe your data is not being handled properly, you can file a complaint with the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).',

    // Cookies
    'cook.title': 'Cookie policy | AUREplus',
    'cook.h1': 'Cookie policy',
    'cook.p1': 'This website does not use advertising or cross-site tracking cookies. We do not install anything that identifies visitors or collects information for commercial purposes.',
    'cook.p2': 'We use <strong>Vercel Web Analytics</strong> to count visits anonymously and in aggregate. This tool does not use cookies or store personal data, and it cannot identify any individual visitor.',
    'cook.p4': 'The demo booking calendar is provided by <strong>Calendly</strong>. It only loads when you click “See available times”, and from then on Calendly may set its own cookies, both those needed for the calendar to work and analytics ones. You can find more in its <a href="https://calendly.com/privacy" target="_blank" rel="noopener">privacy policy</a>.',
    'cook.p3':'If we add other tools that do require cookies in the future, we will update this policy and ask for your consent before enabling them.'
  };

  var KEY = 'aureplus-lang';
  var lang = 'es';

  function stored(){ try{ return localStorage.getItem(KEY); }catch(e){ return null; } }
  function store(l){ try{ localStorage.setItem(KEY, l); }catch(e){} }

  // Primera visita: español si el navegador está en español (de cualquier país: es-ES, es-MX...)
  // o en una lengua de España (catalán/valenciano, euskera, gallego, asturiano, aragonés, aranés);
  // en cualquier otro idioma, inglés. Si el visitante pulsa ES o EN, se respeta siempre su elección.
  function initial(){
    var s = stored();
    if(s === 'es' || s === 'en') return s;
    var nav = (navigator.languages && navigator.languages[0]) || navigator.language || 'es';
    return /^(es|ca|eu|gl|ast|an|oc)\b/i.test(nav) ? 'es' : 'en';
  }

  // Devuelve el texto en el idioma actual; "es" es el texto original en español.
  window.aureT = function(key, es){ return (lang === 'en' && EN[key]) ? EN[key] : es; };

  function apply(l){
    lang = l;
    document.documentElement.lang = l;
    var els = document.querySelectorAll('[data-i18n]');
    for(var i=0;i<els.length;i++){
      var el = els[i], k = el.getAttribute('data-i18n');
      if(el._es === undefined) el._es = el.innerHTML;
      var html = (l === 'en' && EN[k] !== undefined) ? EN[k] : el._es;
      if(el.innerHTML !== html) el.innerHTML = html;
    }
    var attrs = document.querySelectorAll('[data-i18n-attr]');
    for(var j=0;j<attrs.length;j++){
      var a = attrs[j];
      if(!a._esAttr) a._esAttr = {};
      a.getAttribute('data-i18n-attr').split(';').forEach(function(pair){
        var p = pair.split(':'), name = p[0].trim(), key = (p[1]||'').trim();
        if(!name || !key) return;
        if(a._esAttr[name] === undefined) a._esAttr[name] = a.getAttribute(name) || '';
        a.setAttribute(name, (l === 'en' && EN[key] !== undefined) ? EN[key] : a._esAttr[name]);
      });
    }
    var btns = document.querySelectorAll('.lang-switch button');
    for(var b=0;b<btns.length;b++){
      btns[b].setAttribute('aria-pressed', btns[b].getAttribute('data-lang') === l ? 'true' : 'false');
    }
    document.dispatchEvent(new CustomEvent('langchange', {detail:{lang:l}}));
  }

  var switches = document.querySelectorAll('.lang-switch');
  for(var s=0;s<switches.length;s++){ switches[s].hidden = false; }
  document.addEventListener('click', function(e){
    var btn = e.target.closest && e.target.closest('.lang-switch button');
    if(!btn) return;
    var l = btn.getAttribute('data-lang');
    if(l !== lang){ store(l); apply(l); }
  });

  apply(initial());
})();
