/* =========================================================
   I18N
   ========================================================= */
const LANG = { cur:'en' };
const t = (o)=> o[LANG.cur];

const S = {
  nav_dashboard:{en:'Dashboard',ar:'لوحة القيادة'},
  nav_map:{en:'Live Map',ar:'الخريطة الحية'},
  nav_ai:{en:'AI Detection',ar:'الكشف بالذكاء الاصطناعي'},
  nav_agents:{en:'AI Agents',ar:'الوكلاء الذكيون'},
  nav_missions:{en:'Missions',ar:'المهام'},
  nav_personnel:{en:'Personnel',ar:'الأفراد'},
  nav_drones:{en:'Drone Control',ar:'مركز التحكم بالطائرات'},
  nav_alerts:{en:'Alerts',ar:'التنبيهات'},
  nav_analytics:{en:'Analytics',ar:'التحليلات'},
  nav_logout:{en:'Sign out',ar:'تسجيل الخروج'},
  nav_section_ops:{en:'Operations',ar:'العمليات'},
  nav_section_ai:{en:'Intelligence',ar:'الذكاء الاصطناعي'},
  nav_section_resources:{en:'Resources',ar:'الموارد'},

  login_tag:{en:'Emergency Command Center',ar:'مركز قيادة الطوارئ'},
  login_select_role:{en:'Sign in as',ar:'تسجيل الدخول باسم'},
  login_email:{en:'Email',ar:'البريد الإلكتروني'},
  login_email_ph:{en:'you@resq.om',ar:'you@resq.om'},
  login_password:{en:'Password',ar:'كلمة المرور'},
  login_remember:{en:'Remember me',ar:'تذكرني'},
  login_forgot:{en:'Forgot password?',ar:'نسيت كلمة المرور؟'},
  login_btn:{en:'Sign In to Command Center',ar:'دخول إلى مركز القيادة'},
  login_note:{en:'Demo access — no real backend connected yet',ar:'وصول تجريبي — لا يوجد اتصال فعلي بالخادم بعد'},

  topbar_weather:{en:'Muscat 34°C',ar:'مسقط ٣٤°'},

  dash_title:{en:'Emergency Operations Dashboard',ar:'لوحة عمليات الطوارئ'},
  dash_sub:{en:'Real-time overview of national search & rescue operations',ar:'نظرة شاملة لحظية على عمليات البحث والإنقاذ الوطنية'},
  stat_incidents:{en:'Active Incidents',ar:'الحوادث النشطة'},
  stat_teams:{en:'Teams Deployed',ar:'الفرق المنتشرة'},
  stat_missing:{en:'Missing Persons',ar:'الأشخاص المفقودون'},
  stat_response:{en:'Avg. Response Time',ar:'متوسط زمن الاستجابة'},
  radar_title:{en:'Live Operations Radar',ar:'رادار العمليات الحي'},
  radar_sub:{en:'National coverage sweep',ar:'مسح تغطية وطني'},
  fleet_title:{en:'Fleet Availability',ar:'جاهزية الأسطول'},
  fleet_ambulances:{en:'Ambulances',ar:'سيارات الإسعاف'},
  fleet_helicopters:{en:'Helicopters',ar:'المروحيات'},
  fleet_drones:{en:'Drones',ar:'الطائرات المسيّرة'},
  fleet_teams:{en:'Rescue Teams',ar:'فرق الإنقاذ'},
  weather_title:{en:'Regional Weather',ar:'حالة الطقس الإقليمية'},
  alerts_title:{en:'Live Alert Feed',ar:'تنبيهات مباشرة'},
  response_trend_title:{en:'Response Time Trend (7 days)',ar:'اتجاه زمن الاستجابة (٧ أيام)'},
  missing_title:{en:'Missing Persons Summary',ar:'ملخص الأشخاص المفقودين'},
  col_case:{en:'Case',ar:'الحالة'}, col_location:{en:'Last Known Location',ar:'آخر موقع معروف'},
  col_status:{en:'Status',ar:'الوضع'}, col_hours:{en:'Hours Missing',ar:'ساعات الفقدان'}, col_team:{en:'Assigned Team',ar:'الفريق المكلّف'},

  map_title:{en:'Interactive Operations Map',ar:'خريطة العمليات التفاعلية'},
  map_sub:{en:'Live rescue units, incident heatmap and infrastructure across Oman',ar:'وحدات الإنقاذ الحية وخريطة الحرارة والبنية التحتية عبر عُمان'},
  layer_incidents:{en:'Incident Heatmap',ar:'خريطة حرارة الحوادث'},
  layer_units:{en:'Rescue Units',ar:'وحدات الإنقاذ'},
  layer_routes:{en:'Team Routes',ar:'مسارات الفرق'},
  layer_drones:{en:'Drone Flight Paths',ar:'مسارات الطائرات المسيّرة'},
  layer_safe:{en:'Safe Zones',ar:'المناطق الآمنة'},
  layer_hospitals:{en:'Hospitals',ar:'المستشفيات'},
  layer_police:{en:'Police Stations',ar:'مراكز الشرطة'},
  layer_civil:{en:'Civil Defense',ar:'الدفاع المدني'},
  map_layers:{en:'Map Layers',ar:'طبقات الخريطة'},
  map_legend:{en:'Legend',ar:'مفتاح الرموز'},

  ai_title:{en:'AI Visual Detection',ar:'الكشف البصري بالذكاء الاصطناعي'},
  ai_sub:{en:'Upload media or monitor live drone feeds for automatic subject detection',ar:'ارفع ملفات أو راقب بث الطائرات المسيّرة الحي للكشف التلقائي عن الأشخاص'},
  ai_upload_img:{en:'Drop an image here or click to upload',ar:'أسقط صورة هنا أو انقر للرفع'},
  ai_upload_video:{en:'Drop a video here or click to upload',ar:'أسقط فيديو هنا أو انقر للرفع'},
  ai_feed_title:{en:'Drone Live Feed (Simulated)',ar:'بث الطائرة المسيّرة المباشر (محاكاة)'},
  ai_conf_title:{en:'Detection Confidence',ar:'دقة الكشف'},
  ai_history_title:{en:'Detection History',ar:'سجل عمليات الكشف'},
  ai_chart_title:{en:'AI Confidence Over Time',ar:'دقة الذكاء الاصطناعي عبر الزمن'},
  col_time:{en:'Time',ar:'الوقت'}, col_source:{en:'Source',ar:'المصدر'}, col_object:{en:'Object',ar:'العنصر'}, col_conf:{en:'Confidence',ar:'نسبة الثقة'},

  agents_title:{en:'Multi-Agent AI System',ar:'نظام الوكلاء الذكيين المتعدد'},
  agents_sub:{en:'Six specialized agents coordinating every rescue decision',ar:'ستة وكلاء متخصصون ينسّقون كل قرار إنقاذ'},
  agent_last_action:{en:'Last action',ar:'آخر إجراء'},
  agent_confidence:{en:'Confidence',ar:'الثقة'},
  agent_logs:{en:'Live logs',ar:'السجلات الحية'},

  missions_title:{en:'Mission Management',ar:'إدارة المهام'},
  missions_sub:{en:'Create, assign and track rescue missions end-to-end',ar:'إنشاء المهام وتكليفها ومتابعتها من البداية للنهاية'},
  new_mission:{en:'+ New Mission',ar:'+ مهمة جديدة'},
  col_mission:{en:'Mission',ar:'المهمة'}, col_assigned:{en:'Assigned',ar:'المكلّفون'}, col_eta:{en:'ETA',ar:'الوصول المتوقع'}, col_progress:{en:'Progress',ar:'التقدم'},
  timeline_title:{en:'Mission Timeline — ',ar:'الجدول الزمني للمهمة — '},

  new_missing_person:{en:'+ Report Missing Person',ar:'+ الإبلاغ عن مفقود'},
  mp_title:{en:'Missing Persons Reports',ar:'بلاغات الأشخاص المفقودين'},
  mp_form_title:{en:'Report a Missing Person',ar:'الإبلاغ عن شخص مفقود'},
  mp_name:{en:'Full Name',ar:'الاسم الكامل'},
  mp_age:{en:'Age',ar:'العمر'},
  mp_gender:{en:'Gender',ar:'الجنس'},
  mp_gender_male:{en:'Male',ar:'ذكر'},
  mp_gender_female:{en:'Female',ar:'أنثى'},
  mp_photo:{en:'Photo',ar:'الصورة'},
  mp_description:{en:'Description',ar:'الوصف'},
  mp_description_ph:{en:'Clothing, physical features, medical conditions...',ar:'الملابس، السمات الجسدية، الحالات الصحية...'},
  mp_last_seen_location:{en:'Last Seen Location',ar:'آخر موقع شوهد فيه'},
  mp_last_seen_at:{en:'Date & Time Missing',ar:'تاريخ ووقت الفقدان'},
  mp_reporter_section:{en:'Reporter Contact Information',ar:'بيانات التواصل مع المبلّغ'},
  mp_reporter_name:{en:'Reporter Name',ar:'اسم المبلّغ'},
  mp_reporter_phone:{en:'Reporter Phone',ar:'هاتف المبلّغ'},
  mp_reporter_relation:{en:'Relation to Missing Person',ar:'صلة القرابة بالمفقود'},
  mp_submit:{en:'Submit Report',ar:'إرسال البلاغ'},
  col_name:{en:'Name',ar:'الاسم'}, col_age_gender:{en:'Age / Gender',ar:'العمر / الجنس'},
  col_last_seen:{en:'Last Seen',ar:'آخر مشاهدة'}, col_missing_since:{en:'Missing Since',ar:'مفقود منذ'},
  col_reporter:{en:'Reporter Contact',ar:'جهة اتصال المبلّغ'},
  mp_status_reported:{en:'Reported',ar:'تم الإبلاغ'}, mp_status_search_active:{en:'Search Active',ar:'البحث جارٍ'}, mp_status_found:{en:'Found',ar:'تم العثور عليه'},

  cmd_title:{en:'Command & Operations Log',ar:'سجل الأوامر والعمليات'},
  cmd_sub:{en:'Every dispatched command is tracked and verified automatically',ar:'يتم تتبع كل أمر يصدر والتحقق من تنفيذه تلقائياً'},
  cmd_placeholder:{en:'Type a new command to issue...',ar:'اكتب أمراً جديداً لإصداره...'},
  cmd_issue:{en:'Issue Command',ar:'إصدار الأمر'},
  col_command:{en:'Command',ar:'الأمر'}, col_issued_by:{en:'Issued By',ar:'أصدره'},
  status_inprogress:{en:'In Progress',ar:'قيد التنفيذ'}, status_completed:{en:'Completed',ar:'مكتمل'}, status_failed:{en:'Execution Failed',ar:'فشل التنفيذ'},

  personnel_title:{en:'Personnel Management',ar:'إدارة الأفراد'},
  personnel_sub:{en:'Rescue teams, volunteers, police, civil defense & medical staff',ar:'فرق الإنقاذ والمتطوعون والشرطة والدفاع المدني والطواقم الطبية'},
  filter_all:{en:'All',ar:'الكل'},
  filter_rescue:{en:'Rescue Teams',ar:'فرق الإنقاذ'},
  filter_volunteers:{en:'Volunteers',ar:'المتطوعون'},
  filter_police:{en:'Police',ar:'الشرطة'},
  filter_civil:{en:'Civil Defense',ar:'الدفاع المدني'},
  filter_medical:{en:'Medical',ar:'الطبي'},
  p_location:{en:'Location',ar:'الموقع'}, p_missions:{en:'Missions',ar:'المهام'},

  drones_title:{en:'Drone Control Center',ar:'مركز التحكم بالطائرات المسيّرة'},
  drones_sub:{en:'Live telemetry for the active drone fleet',ar:'قياس عن بُعد لحظي لأسطول الطائرات النشط'},
  d_battery:{en:'Battery',ar:'البطارية'}, d_speed:{en:'Speed',ar:'السرعة'}, d_altitude:{en:'Altitude',ar:'الارتفاع'},
  d_signal:{en:'Signal',ar:'الإشارة'}, d_camera:{en:'Camera',ar:'الكاميرا'}, d_mission:{en:'Assigned Mission',ar:'المهمة المكلّف بها'},
  d_live_preview:{en:'Live Camera Preview',ar:'معاينة الكاميرا المباشرة'},

  alerts_title2:{en:'Emergency Alert Center',ar:'مركز تنبيهات الطوارئ'},
  alerts_sub:{en:'All system, weather, SOS and mission notifications',ar:'كل إشعارات النظام والطقس والاستغاثة والمهام'},

  analytics_title:{en:'Analytics & Reporting',ar:'التحليلات والتقارير'},
  analytics_sub:{en:'Operational performance across the national SAR network',ar:'الأداء التشغيلي عبر شبكة البحث والإنقاذ الوطنية'},
  a_monthly:{en:'Monthly Incidents',ar:'الحوادث الشهرية'},
  a_response:{en:'Response Time Trend',ar:'اتجاه زمن الاستجابة'},
  a_success:{en:'Rescue Success Rate',ar:'معدل نجاح الإنقاذ'},
  a_drone_usage:{en:'Drone Usage (hrs)',ar:'ساعات استخدام الطائرات'},
  a_ai_acc:{en:'AI Detection Accuracy',ar:'دقة الكشف بالذكاء الاصطناعي'},
  a_team_perf:{en:'Team Performance Score',ar:'مؤشر أداء الفرق'},

  status_active:{en:'Active',ar:'نشط'}, status_idle:{en:'Idle',ar:'خامل'}, status_analyzing:{en:'Analyzing',ar:'قيد التحليل'},
  status_available:{en:'Available',ar:'متاح'}, status_onmission:{en:'On Mission',ar:'في مهمة'}, status_offduty:{en:'Off Duty',ar:'خارج الدوام'},
  priority_critical:{en:'Critical',ar:'حرجة'}, priority_high:{en:'High',ar:'عالية'}, priority_medium:{en:'Medium',ar:'متوسطة'},
};

function applyStaticI18n(){
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(S[key]) el.textContent = t(S[key]);
  });
  document.querySelectorAll('[data-i18n-ph]').forEach(el=>{
    const key = el.getAttribute('data-i18n-ph');
    if(S[key]) el.placeholder = t(S[key]);
  });
}

function toggleLang(){
  LANG.cur = LANG.cur==='en' ? 'ar' : 'en';
  document.documentElement.lang = LANG.cur;
  document.documentElement.dir = LANG.cur==='ar' ? 'rtl' : 'ltr';
  document.getElementById('lang-btn-label').textContent = LANG.cur==='en' ? 'AR' : 'EN';
  document.getElementById('lang-btn-label-2').textContent = LANG.cur==='en' ? 'AR' : 'EN';
  applyStaticI18n();
  buildRoleChips();
  buildNav();
  renderPage(CURRENT_PAGE, true);
}

/* =========================================================
   MOCK DATA
   ========================================================= */
const ROLES = [
  {key:'commander', en:'Commander', ar:'قائد'},
  {key:'admin', en:'Admin', ar:'مسؤول'},
  {key:'operator', en:'Operator', ar:'مشغّل'},
  {key:'volunteer', en:'Volunteer', ar:'متطوع'},
  {key:'medic', en:'Medic', ar:'طبيب ميداني'},
];
let SELECTED_ROLE = 'commander';

const INCIDENTS = [
  {id:'INC-2201', type:{en:'Missing Hiker', ar:'متسلق مفقود'}, loc:{en:'Jebel Akhdar, Al Dakhiliyah', ar:'الجبل الأخضر، الداخلية'}, priority:'critical', team:{en:'Alpha Rescue', ar:'فريق ألفا للإنقاذ'}, hours:14, x:46,y:38},
  {id:'INC-2202', type:{en:'Flash Flood Rescue', ar:'إنقاذ من سيول'}, loc:{en:'Wadi Bani Khalid, Ash Sharqiyah', ar:'وادي بني خالد، الشرقية'}, priority:'high', team:{en:'Bravo Team', ar:'فريق برافو'}, hours:3, x:62,y:52},
  {id:'INC-2203', type:{en:'Vehicle Accident', ar:'حادث مركبة'}, loc:{en:'Muscat Expressway, Al Batinah', ar:'طريق مسقط السريع، الباطنة'}, priority:'medium', team:{en:'Civil Defense Unit 4', ar:'وحدة الدفاع المدني ٤'}, hours:1, x:50,y:30},
  {id:'INC-2204', type:{en:'Maritime Rescue', ar:'إنقاذ بحري'}, loc:{en:'Khasab Coastline, Musandam', ar:'ساحل خصب، مسندم'}, priority:'critical', team:{en:'Coast Guard Delta', ar:'خفر السواحل دلتا'}, hours:2, x:44,y:8},
  {id:'INC-2205', type:{en:'Missing Camper', ar:'مخيّم مفقود'}, loc:{en:'Wahiba Sands, Ash Sharqiyah', ar:'رمال الشرقية (وهيبة)', }, priority:'high', team:{en:'Desert Unit Echo', ar:'وحدة الصحراء إيكو'}, hours:9, x:66,y:60},
  {id:'INC-2206', type:{en:'Medical Evacuation', ar:'إخلاء طبي'}, loc:{en:'Jebel Qara, Salalah', ar:'جبل القرا، صلالة'}, priority:'medium', team:{en:'Medical Team 2', ar:'الفريق الطبي ٢'}, hours:1, x:22,y:88},
];

const WEATHER = [
  {city:{en:'Muscat',ar:'مسقط'}, temp:34, cond:{en:'Clear',ar:'صافٍ'}, wind:14, alert:false},
  {city:{en:'Jebel Akhdar',ar:'الجبل الأخضر'}, temp:21, cond:{en:'Fog risk',ar:'احتمال ضباب'}, wind:28, alert:true},
  {city:{en:'Musandam',ar:'مسندم'}, temp:31, cond:{en:'Strong wind',ar:'رياح قوية'}, wind:39, alert:true},
  {city:{en:'Salalah',ar:'صلالة'}, temp:27, cond:{en:'Humid',ar:'رطب'}, wind:11, alert:false},
];

const ALERTS = [
  {t:'sos', title:{en:'SOS Signal Received',ar:'إشارة استغاثة مستلمة'}, msg:{en:'Emergency beacon triggered near Wadi Bani Khalid',ar:'تفعيل جهاز إنذار طوارئ قرب وادي بني خالد'}, time:'2 min', color:'red'},
  {t:'weather', title:{en:'Weather Warning',ar:'إنذار جوي'}, msg:{en:'High wind advisory issued for Musandam coastline',ar:'تحذير من رياح قوية لساحل مسندم'}, time:'11 min', color:'amber'},
  {t:'ai', title:{en:'AI Detection Alert',ar:'تنبيه كشف بالذكاء الاصطناعي'}, msg:{en:'Vision Agent flagged a possible subject in drone feed D-04',ar:'رصد وكيل الرؤية شخصاً محتملاً في بث الطائرة D-04'}, time:'18 min', color:'blue'},
  {t:'mission', title:{en:'Mission Update',ar:'تحديث مهمة'}, msg:{en:'INC-2201 team reached checkpoint 3',ar:'وصل فريق INC-2201 إلى نقطة التفتيش ٣'}, time:'26 min', color:'teal'},
  {t:'team', title:{en:'Team Notification',ar:'إشعار فريق'}, msg:{en:'Bravo Team requesting additional medical supplies',ar:'فريق برافو يطلب مستلزمات طبية إضافية'}, time:'40 min', color:'teal'},
  {t:'high', title:{en:'High Priority',ar:'أولوية عالية'}, msg:{en:'New critical incident reported in Musandam',ar:'بلاغ عن حادثة حرجة جديدة في مسندم'}, time:'1 hr', color:'red'},
];

const AGENTS = [
  {name:{en:'Commander Agent',ar:'وكيل القيادة'}, role:{en:'Mission decisions',ar:'قرارات المهمة'}, status:'active', conf:96, color:'orange', ic:'M',
    action:{en:'Approved airlift for INC-2204',ar:'وافق على الإخلاء الجوي لـ INC-2204'},
    logs:[{en:'Evaluated 3 response options',ar:'قيّم ٣ خيارات استجابة'},{en:'Prioritized maritime rescue',ar:'أعطى أولوية للإنقاذ البحري'},{en:'Dispatched Coast Guard Delta',ar:'أرسل خفر السواحل دلتا'}]},
  {name:{en:'Vision Agent',ar:'وكيل الرؤية'}, role:{en:'Analyzes drone imagery',ar:'يحلل صور الطائرات المسيّرة'}, status:'analyzing', conf:88, color:'teal', ic:'V',
    action:{en:'Scanning feed D-04 for thermal signatures',ar:'يفحص بث D-04 بحثاً عن بصمات حرارية'},
    logs:[{en:'Processed 240 frames',ar:'عالج ٢٤٠ إطاراً'},{en:'Detected possible subject, 82% confidence',ar:'رصد شخصاً محتملاً بثقة ٨٢٪'},{en:'Flagged sector 7 for review',ar:'وضع علامة على القطاع ٧ للمراجعة'}]},
  {name:{en:'Weather Agent',ar:'وكيل الطقس'}, role:{en:'Analyzes weather risk',ar:'يحلل مخاطر الطقس'}, status:'active', conf:91, color:'blue', ic:'W',
    action:{en:'Issued high-wind advisory for Musandam',ar:'أصدر تحذيراً من رياح قوية لمسندم'},
    logs:[{en:'Pulled NCM satellite data',ar:'سحب بيانات الأقمار الصناعية'},{en:'Forecasted fog risk +40% Jebel Akhdar',ar:'توقّع زيادة احتمال الضباب ٤٠٪ بالجبل الأخضر'},{en:'Recommended helicopter hold',ar:'أوصى بتأجيل إقلاع المروحية'}]},
  {name:{en:'Route Agent',ar:'وكيل المسارات'}, role:{en:'Safest rescue route',ar:'أأمن مسار للإنقاذ'}, status:'idle', conf:79, color:'amber', ic:'R',
    action:{en:'Computed route around washed-out road',ar:'حسب مساراً بديلاً حول طريق مغمور'},
    logs:[{en:'Cross-checked 4 route options',ar:'راجع ٤ خيارات مسار'},{en:'Avoided flooded Wadi crossing',ar:'تجنّب عبور الوادي المغمور'},{en:'ETA reduced by 9 minutes',ar:'خفّض الوقت المتوقع ٩ دقائق'}]},
  {name:{en:'Medical Agent',ar:'الوكيل الطبي'}, role:{en:'Evaluates victim condition',ar:'يقيّم حالة المصاب'}, status:'active', conf:94, color:'red', ic:'H',
    action:{en:'Classified triage level: urgent',ar:'صنّف مستوى الفرز: عاجل'},
    logs:[{en:'Reviewed vitals from field report',ar:'راجع المؤشرات الحيوية من التقرير الميداني'},{en:'Recommended IV fluids en route',ar:'أوصى بمحلول وريدي أثناء النقل'},{en:'Alerted Sultan Qaboos Hospital ER',ar:'أبلغ طوارئ مستشفى السلطان قابوس'}]},
  {name:{en:'Communication Agent',ar:'وكيل الاتصال'}, role:{en:'Coordinates rescue teams',ar:'ينسّق بين فرق الإنقاذ'}, status:'analyzing', conf:85, color:'teal', ic:'C',
    action:{en:'Relaying coordinates to Bravo Team',ar:'يرسل الإحداثيات لفريق برافو'},
    logs:[{en:'Synced 5 team channels',ar:'زامن ٥ قنوات فرق'},{en:'Resolved radio interference sector 3',ar:'أصلح تشويش اللاسلكي بالقطاع ٣'},{en:'Broadcast weather advisory',ar:'بث تحذيراً جوياً للفرق'}]},
];

const MISSIONS = [
  {id:'MSN-091', name:{en:'Jebel Akhdar Hiker Search',ar:'بحث عن متسلق الجبل الأخضر'}, team:{en:'Alpha Rescue',ar:'فريق ألفا'}, heli:'H-02', drone:'D-01', amb:'A-05', status:'active', progress:64, eta:'42 min',
    steps:[
      {en:'Mission Dispatched',ar:'تم إرسال المهمة',done:true},
      {en:'Team En Route',ar:'الفريق في الطريق',done:true},
      {en:'On Scene',ar:'الوصول للموقع',done:true},
      {en:'Search Active',ar:'البحث جارٍ',done:true},
      {en:'Subject Located',ar:'تحديد موقع المفقود',done:false},
      {en:'Extraction',ar:'الإخلاء',done:false},
      {en:'Mission Complete',ar:'اكتمال المهمة',done:false},
    ]},
  {id:'MSN-092', name:{en:'Musandam Maritime Rescue',ar:'الإنقاذ البحري في مسندم'}, team:{en:'Coast Guard Delta',ar:'خفر السواحل دلتا'}, heli:'H-01', drone:'D-03', amb:'A-02', status:'critical', progress:38, eta:'19 min',
    steps:[{en:'Mission Dispatched',ar:'تم إرسال المهمة',done:true},{en:'Team En Route',ar:'الفريق في الطريق',done:true},{en:'On Scene',ar:'الوصول للموقع',done:false},{en:'Search Active',ar:'البحث جارٍ',done:false},{en:'Subject Located',ar:'تحديد موقع المفقود',done:false},{en:'Extraction',ar:'الإخلاء',done:false},{en:'Mission Complete',ar:'اكتمال المهمة',done:false}]},
  {id:'MSN-093', name:{en:'Wahiba Sands Camper Search',ar:'البحث عن مخيّم رمال الشرقية'}, team:{en:'Desert Unit Echo',ar:'وحدة الصحراء إيكو'}, heli:'—', drone:'D-05', amb:'A-07', status:'active', progress:80, eta:'8 min',
    steps:[{en:'Mission Dispatched',ar:'تم إرسال المهمة',done:true},{en:'Team En Route',ar:'الفريق في الطريق',done:true},{en:'On Scene',ar:'الوصول للموقع',done:true},{en:'Search Active',ar:'البحث جارٍ',done:true},{en:'Subject Located',ar:'تحديد موقع المفقود',done:true},{en:'Extraction',ar:'الإخلاء',done:false},{en:'Mission Complete',ar:'اكتمال المهمة',done:false}]},
];

/* ---- Missing person intake reports (mock, in-memory) ---- */
let MP_SEQ = 1;
const MISSING_PERSONS_REPORTS = [
  {
    id:'MP-001', missionId:'MSN-091', name:'Salim Al Amri', age:34, gender:'male', photo:null,
    description:{en:'Wearing a red hiking jacket and grey backpack. Experienced hiker, no known medical conditions.',
                 ar:'يرتدي سترة تسلق حمراء وحقيبة ظهر رمادية. متسلق خبير، لا توجد حالات صحية معروفة.'},
    lastSeenLocation:{en:'Jebel Akhdar, Saiq Plateau trailhead',ar:'الجبل الأخضر، بداية مسار هضبة صيق'},
    lastSeenAt:'2026-07-17T15:30',
    reporterName:'Bader Al Amri', reporterPhone:'+968 9911 2233', reporterRelation:{en:'Brother',ar:'أخ'},
    status:'search_active',
  },
];

/* ---- Rescue command / order tracking (mock, auto-updating) ---- */
let CMD_SEQ = 4;
const COMMANDS = [
  {id:'CMD-001', missionId:'MSN-091', text:{en:'Dispatch ground team to Saiq Plateau',ar:'إرسال الفريق الأرضي إلى هضبة صيق'}, issuedBy:{en:'Commander Agent',ar:'وكيل القيادة'}, time:'09:02', status:'completed', ticks:0},
  {id:'CMD-002', missionId:'MSN-091', text:{en:'Launch drone D-01 for aerial search',ar:'إطلاق الطائرة D-01 للبحث الجوي'}, issuedBy:{en:'Commander Agent',ar:'وكيل القيادة'}, time:'09:14', status:'completed', ticks:0},
  {id:'CMD-003', missionId:'MSN-091', text:{en:'Request thermal imaging pass, sector 7',ar:'طلب تصوير حراري للقطاع ٧'}, issuedBy:{en:'Vision Agent',ar:'وكيل الرؤية'}, time:'09:41', status:'in_progress', ticks:3},
  {id:'CMD-004', missionId:'MSN-092', text:{en:'Dispatch Coast Guard vessel to last known position',ar:'إرسال زورق خفر السواحل لآخر موقع معروف'}, issuedBy:{en:'Commander Agent',ar:'وكيل القيادة'}, time:'10:05', status:'in_progress', ticks:2},
  {id:'CMD-005', missionId:'MSN-093', text:{en:'Confirm extraction point with ground team',ar:'تأكيد نقطة الإخلاء مع الفريق الأرضي'}, issuedBy:{en:'Route Agent',ar:'وكيل المسارات'}, time:'11:20', status:'failed', ticks:0},
];

const PERSONNEL = [
  {cat:'rescue', name:'Yousuf Al Balushi', rank:{en:'Team Leader',ar:'قائد فريق'}, skills:['Rope Rescue','First Aid','Navigation'], loc:{en:'Jebel Akhdar',ar:'الجبل الأخضر'}, avail:'onmission', missions:47},
  {cat:'rescue', name:'Sultan Al Habsi', rank:{en:'Field Medic',ar:'مسعف ميداني'}, skills:['Trauma Care','Extraction'], loc:{en:'Nizwa Base',ar:'قاعدة نزوى'}, avail:'available', missions:32},
  {cat:'volunteer', name:'Maryam Al Kindi', rank:{en:'Volunteer Coordinator',ar:'منسقة متطوعين'}, skills:['Logistics','Radio Ops'], loc:{en:'Muscat HQ',ar:'مقر مسقط'}, avail:'available', missions:19},
  {cat:'volunteer', name:'Faisal Al Rawahi', rank:{en:'Ground Volunteer',ar:'متطوع ميداني'}, skills:['Search Pattern','4x4 Driving'], loc:{en:'Wahiba Sands',ar:'رمال الشرقية'}, avail:'onmission', missions:11},
  {cat:'police', name:'Capt. Nasser Al Hinai', rank:{en:'Operations Captain',ar:'نقيب عمليات'}, skills:['Traffic Control','Command'], loc:{en:'Muscat Expressway',ar:'طريق مسقط السريع'}, avail:'onmission', missions:64},
  {cat:'civil', name:'Lt. Ahmed Al Farsi', rank:{en:'Unit Commander',ar:'قائد وحدة'}, skills:['Flood Response','Heavy Equipment'], loc:{en:'Wadi Bani Khalid',ar:'وادي بني خالد'}, avail:'onmission', missions:29},
  {cat:'civil', name:'Khalid Al Maskari', rank:{en:'Equipment Operator',ar:'مشغل معدات'}, skills:['Pump Operations'], loc:{en:'Nizwa Base',ar:'قاعدة نزوى'}, avail:'available', missions:22},
  {cat:'medical', name:'Dr. Aisha Al Zadjali', rank:{en:'ER Physician',ar:'طبيبة طوارئ'}, skills:['Triage','Trauma Surgery'], loc:{en:'Sultan Qaboos Hospital',ar:'مستشفى السلطان قابوس'}, avail:'available', missions:8},
  {cat:'medical', name:'Hamed Al Siyabi', rank:{en:'Paramedic',ar:'مسعف'}, skills:['Ambulance Transport'], loc:{en:'Salalah Base',ar:'قاعدة صلالة'}, avail:'onmission', missions:36},
];

const DRONES = [
  {id:'D-01', battery:78, speed:42, alt:120, gps:'23.07°N 57.53°E', signal:4, cam:'ok', mission:'MSN-091'},
  {id:'D-02', battery:34, speed:0, alt:0, gps:'23.61°N 58.19°E', signal:3, cam:'ok', mission:'—'},
  {id:'D-03', battery:91, speed:55, alt:180, gps:'26.19°N 56.25°E', signal:5, cam:'ok', mission:'MSN-092'},
  {id:'D-04', battery:56, speed:38, alt:95, gps:'22.02°N 59.53°E', signal:2, cam:'warn', mission:'—'},
  {id:'D-05', battery:63, speed:47, alt:140, gps:'22.02°N 58.86°E', signal:4, cam:'ok', mission:'MSN-093'},
];

const AI_HISTORY = [
  {time:'09:42', source:'Drone D-03', obj:{en:'Person (prone)',ar:'شخص (مستلقٍ)'}, conf:91},
  {time:'09:31', source:'Drone D-01', obj:{en:'Vehicle',ar:'مركبة'}, conf:87},
  {time:'09:14', source:'Upload — IMG_2291', obj:{en:'Person (standing)',ar:'شخص (واقف)'}, conf:95},
  {time:'08:58', source:'Drone D-05', obj:{en:'Thermal signature',ar:'بصمة حرارية'}, conf:73},
  {time:'08:40', source:'Upload — VID_0087', obj:{en:'Debris field',ar:'حقل حطام'}, conf:68},
];

/* =========================================================
   NAV / PAGE FRAMEWORK
   ========================================================= */
const NAV = [
  {section:'nav_section_ops', items:[
    {key:'dashboard', label:'nav_dashboard', icon:'grid'},
    {key:'map', label:'nav_map', icon:'map'},
    {key:'missions', label:'nav_missions', icon:'clipboard'},
    {key:'alerts', label:'nav_alerts', icon:'bell'},
  ]},
  {section:'nav_section_ai', items:[
    {key:'ai', label:'nav_ai', icon:'eye'},
    {key:'agents', label:'nav_agents', icon:'cpu'},
    {key:'analytics', label:'nav_analytics', icon:'chart'},
  ]},
  {section:'nav_section_resources', items:[
    {key:'personnel', label:'nav_personnel', icon:'users'},
    {key:'drones', label:'nav_drones', icon:'drone'},
  ]},
];
const ICONS = {
  grid:'<rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/>',
  map:'<polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21"/><line x1="9" y1="3" x2="9" y2="18"/><line x1="15" y1="6" x2="15" y2="21"/>',
  clipboard:'<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 4V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1"/><line x1="9" y1="11" x2="15" y2="11"/><line x1="9" y1="15" x2="15" y2="15"/>',
  bell:'<path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/>',
  eye:'<path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z"/><circle cx="12" cy="12" r="3"/>',
  cpu:'<rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>',
  chart:'<line x1="4" y1="20" x2="4" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="20" y1="20" x2="20" y2="14"/>',
  users:'<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>',
  drone:'<circle cx="12" cy="12" r="2.5"/><circle cx="5" cy="5" r="2"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><circle cx="19" cy="19" r="2"/><line x1="7" y1="7" x2="10.5" y2="10.5"/><line x1="17" y1="7" x2="13.5" y2="10.5"/><line x1="7" y1="17" x2="10.5" y2="13.5"/><line x1="17" y1="17" x2="13.5" y2="13.5"/>',
};
function svgIcon(name){ return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${ICONS[name]||''}</svg>`; }

let CURRENT_PAGE = 'dashboard';
let charts = {};

function buildRoleChips(){
  const el = document.getElementById('role-chips');
  el.innerHTML = ROLES.map(r=>`<div class="role-chip ${r.key===SELECTED_ROLE?'active':''}" onclick="selectRole('${r.key}')">${LANG.cur==='en'?r.en:r.ar}</div>`).join('');
}
function selectRole(k){ SELECTED_ROLE = k; buildRoleChips(); }

function buildNav(){
  const el = document.getElementById('nav-list');
  el.innerHTML = NAV.map(sec=>`
    <div class="nav-label-sm">${t(S[sec.section])}</div>
    ${sec.items.map(it=>`
      <div class="nav-item ${it.key===CURRENT_PAGE?'active':''}" onclick="goPage('${it.key}')">
        ${svgIcon(it.icon)}
        <span>${t(S[it.label])}</span>
      </div>`).join('')}
  `).join('');
}

function doLogin(){
  document.getElementById('screen-login').style.display='none';
  document.getElementById('screen-app').style.display='block';
  document.getElementById('role-label-side').textContent = LANG.cur==='en' ? ROLES.find(r=>r.key===SELECTED_ROLE).en : ROLES.find(r=>r.key===SELECTED_ROLE).ar;
  buildNav();
  goPage('dashboard');
  startClock();
}
function logout(){
  document.getElementById('screen-app').style.display='none';
  document.getElementById('screen-login').style.display='flex';
}

function goPage(key){
  CURRENT_PAGE = key;
  buildNav();
  document.getElementById('page-title').textContent = t(S['nav_'+key] || S.nav_dashboard);
  renderPage(key);
  if(window.innerWidth<=760) document.getElementById('sidebar').classList.remove('open');
}

function startClock(){
  function tick(){
    const now = new Date();
    const opts = {hour:'2-digit', minute:'2-digit', second:'2-digit', hour12:false, timeZone:'Asia/Muscat'};
    document.getElementById('clock-text').textContent = now.toLocaleTimeString('en-GB', opts) + ' GST';
  }
  tick(); setInterval(tick, 1000);
}

/* =========================================================
   RENDER: PAGE ROUTER
   ========================================================= */
function renderPage(key, isLangSwitch){
  const c = document.getElementById('content');
  c.innerHTML = '<div class="page">'+PAGES[key]()+'</div>';
  applyStaticI18n();
  requestAnimationFrame(()=> AFTER_RENDER[key] && AFTER_RENDER[key]());
}

const priorityBadge = p => `<span class="badge badge-${p}">${t(S['priority_'+p])}</span>`;
const statusColorMap = {active:'teal', idle:'text-1', analyzing:'blue', available:'teal', onmission:'amber', offduty:'text-2'};

/* ---------- DASHBOARD ---------- */
PAGES = {};
PAGES.dashboard = function(){
  return `
  <div class="flex justify-between items-start" style="margin-bottom:22px; flex-wrap:wrap; gap:10px;">
    <div>
      <div class="section-title font-display" data-i18n="dash_title">${t(S.dash_title)}</div>
      <div class="section-sub" data-i18n="dash_sub">${t(S.dash_sub)}</div>
    </div>
  </div>

  <div class="grid-dash" style="margin-bottom:18px;">
    <div class="glass card-pad stat-card">
      <div class="stat-label" data-i18n="stat_incidents">${t(S.stat_incidents)}</div>
      <div class="stat-num" style="color:var(--red)">${INCIDENTS.length}</div>
      <div class="stat-label trend-up">▲ +2 <span style="color:var(--text-2)">/24h</span></div>
    </div>
    <div class="glass card-pad stat-card">
      <div class="stat-label" data-i18n="stat_teams">${t(S.stat_teams)}</div>
      <div class="stat-num" style="color:var(--teal)">11</div>
      <div class="stat-label" style="color:var(--text-2)">6 ${LANG.cur==='en'?'regions':'مناطق'}</div>
    </div>
    <div class="glass card-pad stat-card">
      <div class="stat-label" data-i18n="stat_missing">${t(S.stat_missing)}</div>
      <div class="stat-num" style="color:var(--amber)">3</div>
      <div class="stat-label trend-down">▼ -1 <span style="color:var(--text-2)">/24h</span></div>
    </div>
    <div class="glass card-pad stat-card">
      <div class="stat-label" data-i18n="stat_response">${t(S.stat_response)}</div>
      <div class="stat-num font-mono">17.4<span style="font-size:15px;color:var(--text-2)">min</span></div>
      <div class="stat-label trend-down">▼ 8% <span style="color:var(--text-2)">${LANG.cur==='en'?'vs last week':'مقارنة بالأسبوع الماضي'}</span></div>
    </div>
  </div>

  <div class="grid-dash">
    <div class="glass card-pad" style="grid-column:span 4;">
      <div class="flex justify-between items-center" style="margin-bottom:6px;">
        <div style="font-weight:700;" data-i18n="radar_title">${t(S.radar_title)}</div>
      </div>
      <div class="section-sub" style="margin-bottom:14px;" data-i18n="radar_sub">${t(S.radar_sub)}</div>
      <div class="radar-wrap">
        <div class="radar-ring" style="inset:0;"></div>
        <div class="radar-ring" style="inset:15%;"></div>
        <div class="radar-ring" style="inset:32%;"></div>
        <div class="radar-ring" style="inset:47%;"></div>
        <div class="radar-sweep"></div>
        ${INCIDENTS.slice(0,5).map((inc,i)=>`<div class="radar-blip ${i%2===0?'':'b-teal'}" style="top:${20+i*13}%; left:${25+((i*37)%55)}%;"></div>`).join('')}
      </div>
    </div>

    <div class="glass card-pad" style="grid-column:span 4;">
      <div style="font-weight:700; margin-bottom:14px;" data-i18n="fleet_title">${t(S.fleet_title)}</div>
      ${fleetRow('fleet_ambulances', 14, 20, 'orange')}
      ${fleetRow('fleet_helicopters', 3, 6, 'teal')}
      ${fleetRow('fleet_drones', 4, 5, 'blue')}
      ${fleetRow('fleet_teams', 8, 11, 'amber')}
    </div>

    <div class="glass card-pad" style="grid-column:span 4;">
      <div style="font-weight:700; margin-bottom:14px;" data-i18n="weather_title">${t(S.weather_title)}</div>
      <div class="flex flex-col gap-3">
        ${WEATHER.map(w=>`
        <div class="flex justify-between items-center">
          <div>
            <div style="font-size:13.5px; font-weight:600;">${t(w.city)}</div>
            <div style="font-size:11.5px; color:var(--text-2);">${t(w.cond)} · ${w.wind} km/h</div>
          </div>
          <div class="flex items-center gap-2">
            <div class="font-mono" style="font-size:18px; font-weight:700;">${w.temp}°</div>
            ${w.alert?`<span class="dot dot-pulse" style="background:var(--amber); color:var(--amber);"></span>`:''}
          </div>
        </div>`).join('')}
      </div>
    </div>

    <div class="glass card-pad" style="grid-column:span 7;">
      <div style="font-weight:700; margin-bottom:10px;" data-i18n="response_trend_title">${t(S.response_trend_title)}</div>
      <canvas id="chart-response-trend" height="90"></canvas>
    </div>

    <div class="glass card-pad" style="grid-column:span 5; max-height:340px; overflow-y:auto;">
      <div style="font-weight:700; margin-bottom:12px;" data-i18n="alerts_title">${t(S.alerts_title)}</div>
      <div class="flex flex-col gap-2">
        ${ALERTS.slice(0,5).map(a=>alertMiniItem(a)).join('')}
      </div>
    </div>

    <div class="glass card-pad" style="grid-column:span 12;">
      <div style="font-weight:700; margin-bottom:10px;" data-i18n="missing_title">${t(S.missing_title)}</div>
      <div style="overflow-x:auto;">
      <table class="tbl">
        <thead><tr>
          <th data-i18n="col_case">${t(S.col_case)}</th><th data-i18n="col_location">${t(S.col_location)}</th>
          <th data-i18n="col_status">${t(S.col_status)}</th><th data-i18n="col_hours">${t(S.col_hours)}</th><th data-i18n="col_team">${t(S.col_team)}</th>
        </tr></thead>
        <tbody>
          ${INCIDENTS.filter(i=>i.type.en.includes('Missing')).map(i=>`
          <tr>
            <td class="font-mono">${i.id}</td>
            <td>${t(i.loc)}</td>
            <td>${priorityBadge(i.priority)}</td>
            <td class="font-mono">${i.hours}h</td>
            <td>${t(i.team)}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      </div>
    </div>
  </div>`;
};
function fleetRow(labelKey, avail, total, color){
  const pct = Math.round(avail/total*100);
  return `
  <div style="margin-bottom:14px;">
    <div class="flex justify-between" style="font-size:12.5px; margin-bottom:6px;">
      <span style="color:var(--text-1);" data-i18n="${labelKey}">${t(S[labelKey])}</span>
      <span class="font-mono" style="font-weight:700;">${avail}/${total}</span>
    </div>
    <div class="bar-track"><div class="bar-fill" style="width:${pct}%; background:var(--${color});"></div></div>
  </div>`;
}
function alertMiniItem(a){
  return `
  <div class="flex items-center gap-2" style="padding:8px 4px; border-bottom:1px dashed #ffffff0a;">
    <span class="dot dot-pulse" style="background:var(--${a.color}); color:var(--${a.color}); flex-shrink:0;"></span>
    <div style="min-width:0;">
      <div style="font-size:12.5px; font-weight:600;">${t(a.title)}</div>
      <div style="font-size:11.5px; color:var(--text-2); white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${t(a.msg)}</div>
    </div>
    <div style="margin-inline-start:auto; font-size:11px; color:var(--text-2); flex-shrink:0;">${a.time}</div>
  </div>`;
}

/* ---------- MAP ---------- */
const LAYER_COLORS = {incidents:'#f5385e', units:'#2adfc9', routes:'#4f8dfd', drones:'#ffbb3d', safe:'#7cf07c', hospitals:'#ff7a3d', police:'#9b7bff', civil:'#ff5c8a'};
PAGES.map = function(){
  return `
  <div style="margin-bottom:22px;">
    <div class="section-title font-display" data-i18n="map_title">${t(S.map_title)}</div>
    <div class="section-sub" data-i18n="map_sub">${t(S.map_sub)}</div>
  </div>
  <div class="grid-dash">
    <div class="glass card-pad" style="grid-column:span 9;">
      <div class="map-canvas" id="map-canvas">
        ${INCIDENTS.map(i=>`<div class="map-pin" data-layer="incidents units" style="left:${i.x}%; top:${i.y}%; color:${LAYER_COLORS.incidents};" title="${t(i.type)}"></div>`).join('')}
        <div class="map-pin" data-layer="hospitals" style="left:48%; top:32%; color:${LAYER_COLORS.hospitals};" title="Sultan Qaboos Hospital"></div>
        <div class="map-pin" data-layer="hospitals" style="left:20%; top:86%; color:${LAYER_COLORS.hospitals};" title="Salalah Hospital"></div>
        <div class="map-pin" data-layer="police" style="left:52%; top:29%; color:${LAYER_COLORS.police};" title="Muscat Police HQ"></div>
        <div class="map-pin" data-layer="civil" style="left:60%; top:50%; color:${LAYER_COLORS.civil};" title="Civil Defense Center"></div>
        <div class="map-pin" data-layer="safe" style="left:44%; top:36%; color:${LAYER_COLORS.safe};" title="Safe Zone — Muscat"></div>
        <div class="map-pin" data-layer="drones" style="left:45%; top:9%; color:${LAYER_COLORS.drones};" title="Drone D-03"></div>
        <div class="map-pin" data-layer="drones" style="left:67%; top:61%; color:${LAYER_COLORS.drones};" title="Drone D-05"></div>
        <svg data-layer="routes" style="position:absolute; inset:0; width:100%; height:100%; pointer-events:none;">
          <path d="M 50% 30% Q 55% 40%, 62% 52%" stroke="${LAYER_COLORS.routes}" stroke-width="2" fill="none" stroke-dasharray="5 4" opacity=".7"/>
          <path d="M 22% 88% Q 30% 75%, 46% 38%" stroke="${LAYER_COLORS.routes}" stroke-width="2" fill="none" stroke-dasharray="5 4" opacity=".7"/>
        </svg>
        <div style="position:absolute; bottom:12px; ${LANG.cur==='ar'?'right':'left'}:12px; font-size:11px; color:var(--text-2); font-family:'JetBrains Mono',monospace;">OMAN · 17°N–26°N · 52°E–60°E (mock projection)</div>
      </div>
    </div>
    <div style="grid-column:span 3; display:flex; flex-direction:column; gap:16px;">
      <div class="glass card-pad">
        <div style="font-weight:700; margin-bottom:10px;" data-i18n="map_layers">${t(S.map_layers)}</div>
        ${['incidents','units','routes','drones','safe','hospitals','police','civil'].map(l=>`
          <label class="layer-toggle">
            <input type="checkbox" checked onchange="toggleLayer('${l}', this.checked)">
            <span class="map-legend-dot" style="background:${LAYER_COLORS[l]};"></span>
            <span data-i18n="layer_${l}">${t(S['layer_'+l])}</span>
          </label>`).join('')}
      </div>
      <div class="glass card-pad">
        <div style="font-weight:700; margin-bottom:10px;" data-i18n="map_legend">${t(S.map_legend)}</div>
        <div class="flex flex-col gap-2">
          <div class="map-legend-item"><span class="map-legend-dot" style="background:${LAYER_COLORS.incidents};"></span>${LANG.cur==='en'?'Active Incident':'حادثة نشطة'}</div>
          <div class="map-legend-item"><span class="map-legend-dot" style="background:${LAYER_COLORS.hospitals};"></span>${LANG.cur==='en'?'Hospital':'مستشفى'}</div>
          <div class="map-legend-item"><span class="map-legend-dot" style="background:${LAYER_COLORS.police};"></span>${LANG.cur==='en'?'Police Station':'مركز شرطة'}</div>
          <div class="map-legend-item"><span class="map-legend-dot" style="background:${LAYER_COLORS.civil};"></span>${LANG.cur==='en'?'Civil Defense':'الدفاع المدني'}</div>
          <div class="map-legend-item"><span class="map-legend-dot" style="background:${LAYER_COLORS.safe};"></span>${LANG.cur==='en'?'Safe Zone':'منطقة آمنة'}</div>
          <div class="map-legend-item"><span class="map-legend-dot" style="background:${LAYER_COLORS.drones};"></span>${LANG.cur==='en'?'Drone Position':'موقع طائرة مسيّرة'}</div>
        </div>
      </div>
    </div>
  </div>`;
};
function toggleLayer(name, on){
  document.querySelectorAll(`[data-layer~="${name}"]`).forEach(el=> el.style.display = on ? '' : 'none');
}

/* ---------- AI DETECTION ---------- */
PAGES.ai = function(){
  return `
  <div style="margin-bottom:22px;">
    <div class="section-title font-display" data-i18n="ai_title">${t(S.ai_title)}</div>
    <div class="section-sub" data-i18n="ai_sub">${t(S.ai_sub)}</div>
  </div>
  <div class="grid-dash">
    <div class="glass card-pad" style="grid-column:span 6;">
      <div class="dropzone" style="margin-bottom:12px;">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--text-1)" stroke-width="1.6" style="margin:0 auto 8px;"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>
        <div data-i18n="ai_upload_img">${t(S.ai_upload_img)}</div>
      </div>
      <div class="dropzone">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="var(--text-1)" stroke-width="1.6" style="margin:0 auto 8px;"><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
        <div data-i18n="ai_upload_video">${t(S.ai_upload_video)}</div>
      </div>
    </div>
    <div class="glass card-pad" style="grid-column:span 6;">
      <div style="font-weight:700; margin-bottom:10px;" data-i18n="ai_feed_title">${t(S.ai_feed_title)}</div>
      <div class="feed-frame">
        <div class="scan-line"></div>
        <div class="bbox" style="left:28%; top:34%; width:70px; height:110px;"><span>${LANG.cur==='en'?'Person 91%':'شخص ٩١٪'}</span></div>
        <div class="bbox" style="left:62%; top:52%; width:56px; height:56px; border-color:var(--amber);"><span style="background:var(--amber); color:#3a2600;">${LANG.cur==='en'?'Debris 68%':'حطام ٦٨٪'}</span></div>
        <div style="position:absolute; bottom:8px; left:8px; font-size:10.5px; font-family:'JetBrains Mono',monospace; color:var(--teal); background:#00000060; padding:2px 6px; border-radius:4px;">● LIVE — D-03</div>
      </div>
    </div>
    <div class="glass card-pad" style="grid-column:span 5;">
      <div style="font-weight:700; margin-bottom:12px;" data-i18n="ai_conf_title">${t(S.ai_conf_title)}</div>
      ${confRow(LANG.cur==='en'?'Person':'شخص', 91, 'teal')}
      ${confRow(LANG.cur==='en'?'Vehicle':'مركبة', 84, 'blue')}
      ${confRow(LANG.cur==='en'?'Debris':'حطام', 68, 'amber')}
      ${confRow(LANG.cur==='en'?'Water Hazard':'خطر مائي', 55, 'red')}
    </div>
    <div class="glass card-pad" style="grid-column:span 7;">
      <div style="font-weight:700; margin-bottom:10px;" data-i18n="ai_chart_title">${t(S.ai_chart_title)}</div>
      <canvas id="chart-ai-confidence" height="110"></canvas>
    </div>
    <div class="glass card-pad" style="grid-column:span 12;">
      <div style="font-weight:700; margin-bottom:10px;" data-i18n="ai_history_title">${t(S.ai_history_title)}</div>
      <div style="overflow-x:auto;">
      <table class="tbl">
        <thead><tr><th data-i18n="col_time">${t(S.col_time)}</th><th data-i18n="col_source">${t(S.col_source)}</th><th data-i18n="col_object">${t(S.col_object)}</th><th data-i18n="col_conf">${t(S.col_conf)}</th></tr></thead>
        <tbody>
          ${AI_HISTORY.map(h=>`<tr><td class="font-mono">${h.time}</td><td>${h.source}</td><td>${t(h.obj)}</td><td class="font-mono" style="color:var(--teal);">${h.conf}%</td></tr>`).join('')}
        </tbody>
      </table>
      </div>
    </div>
  </div>`;
};
function confRow(label, val, color){
  return `<div style="margin-bottom:12px;">
    <div class="flex justify-between" style="font-size:12.5px; margin-bottom:6px;"><span>${label}</span><span class="font-mono" style="font-weight:700;">${val}%</span></div>
    <div class="bar-track"><div class="bar-fill" style="width:${val}%; background:var(--${color});"></div></div>
  </div>`;
}

/* ---------- AGENTS ---------- */
PAGES.agents = function(){
  return `
  <div style="margin-bottom:22px;">
    <div class="section-title font-display" data-i18n="agents_title">${t(S.agents_title)}</div>
    <div class="section-sub" data-i18n="agents_sub">${t(S.agents_sub)}</div>
  </div>
  <div class="grid-dash">
    ${AGENTS.map(a=>`
    <div class="glass card-pad" style="grid-column:span 6;">
      <div class="flex items-center gap-3" style="margin-bottom:12px;">
        <div class="agent-avatar" style="background:var(--${a.color}-dim); color:var(--${a.color});">${a.ic}</div>
        <div style="flex:1;">
          <div style="font-weight:700; font-size:14.5px;">${t(a.name)}</div>
          <div style="font-size:11.5px; color:var(--text-2);">${t(a.role)}</div>
        </div>
        <span class="badge badge-${a.status}">${t(S['status_'+a.status])}</span>
      </div>
      <div class="flex items-center gap-2" style="font-size:12px; color:var(--text-1); margin-bottom:10px;">
        <span data-i18n="agent_last_action">${t(S.agent_last_action)}:</span>
        <span style="color:var(--text-0);">${t(a.action)}</span>
        ${a.status==='analyzing'?'<span class="thinking-dots"><span></span><span></span><span></span></span>':''}
      </div>
      <div style="margin-bottom:12px;">
        <div class="flex justify-between" style="font-size:11.5px; margin-bottom:5px;"><span data-i18n="agent_confidence">${t(S.agent_confidence)}</span><span class="font-mono">${a.conf}%</span></div>
        <div class="bar-track"><div class="bar-fill" style="width:${a.conf}%; background:var(--${a.color});"></div></div>
      </div>
      <div style="font-size:11px; color:var(--text-2); margin-bottom:6px;" data-i18n="agent_logs">${t(S.agent_logs)}</div>
      <div style="max-height:90px; overflow-y:auto;">
        ${a.logs.map(l=>`<div class="log-line">&gt; ${t(l)}</div>`).join('')}
      </div>
    </div>`).join('')}
  </div>`;
};

/* ---------- MISSIONS ---------- */
let SELECTED_MISSION = 0;
PAGES.missions = function(){
  const m = MISSIONS[SELECTED_MISSION];
  return `
  <div class="flex justify-between items-start" style="margin-bottom:22px; flex-wrap:wrap; gap:10px;">
    <div>
      <div class="section-title font-display" data-i18n="missions_title">${t(S.missions_title)}</div>
      <div class="section-sub" data-i18n="missions_sub">${t(S.missions_sub)}</div>
    </div>
    <div class="flex gap-2">
      <button class="btn-ghost" onclick="openMissingPersonModal()" data-i18n="new_missing_person">${t(S.new_missing_person)}</button>
      <button class="btn-primary" onclick="openMissionModal()" data-i18n="new_mission">${t(S.new_mission)}</button>
    </div>
  </div>
  <div class="grid-dash">
    <div class="glass card-pad" style="grid-column:span 12;">
      <div style="overflow-x:auto;">
      <table class="tbl">
        <thead><tr>
          <th data-i18n="col_mission">${t(S.col_mission)}</th><th data-i18n="col_assigned">${t(S.col_assigned)}</th>
          <th data-i18n="col_status">${t(S.col_status)}</th><th data-i18n="col_progress">${t(S.col_progress)}</th><th data-i18n="col_eta">${t(S.col_eta)}</th>
        </tr></thead>
        <tbody>
          ${MISSIONS.map((mm,idx)=>`
          <tr style="cursor:pointer; ${idx===SELECTED_MISSION?'background:#ffffff06;':''}" onclick="selectMission(${idx})">
            <td><div class="font-mono" style="font-size:11px; color:var(--text-2);">${mm.id}</div><div style="font-weight:600;">${t(mm.name)}</div></td>
            <td style="font-size:12px;">${t(mm.team)} · ✈ ${mm.heli} · 🛸 ${mm.drone} · 🚑 ${mm.amb}</td>
            <td>${priorityBadge(mm.status==='critical'?'critical':'medium')}</td>
            <td style="min-width:120px;"><div class="bar-track"><div class="bar-fill" style="width:${mm.progress}%; background:var(--teal);"></div></div></td>
            <td class="font-mono">${mm.eta}</td>
          </tr>`).join('')}
        </tbody>
      </table>
      </div>
    </div>
    <div class="glass card-pad" style="grid-column:span 12;">
      <div style="font-weight:700; margin-bottom:16px;">${t(S.timeline_title)}<span style="color:var(--orange);">${t(m.name)}</span></div>
      <div class="timeline">
        ${m.steps.map((s,i)=>`
        <div class="timeline-step">
          <div class="timeline-dot" style="background:${s.done?'var(--teal-dim)':'#ffffff10'}; color:${s.done?'var(--teal)':'var(--text-2)'}; border:1px solid ${s.done?'var(--teal)':'var(--border-strong)'};">${i+1}</div>
          <div style="font-weight:600; font-size:13.5px; color:${s.done?'var(--text-0)':'var(--text-2)'};">${t(s)}</div>
        </div>`).join('')}
      </div>
    </div>

    <div class="glass card-pad" style="grid-column:span 12;">
      <div style="font-weight:700; margin-bottom:10px;" data-i18n="mp_title">${t(S.mp_title)}</div>
      <div style="overflow-x:auto;">
      <table class="tbl">
        <thead><tr>
          <th data-i18n="col_name">${t(S.col_name)}</th><th data-i18n="col_age_gender">${t(S.col_age_gender)}</th>
          <th data-i18n="col_last_seen">${t(S.col_last_seen)}</th><th data-i18n="col_missing_since">${t(S.col_missing_since)}</th>
          <th data-i18n="col_status">${t(S.col_status)}</th><th data-i18n="col_reporter">${t(S.col_reporter)}</th>
        </tr></thead>
        <tbody>
          ${MISSING_PERSONS_REPORTS.map(p=>`
          <tr>
            <td>
              <div class="flex items-center gap-2">
                ${p.photo?`<img src="${p.photo}" style="width:32px;height:32px;border-radius:8px;object-fit:cover;">`:`<div class="avatar-circle" style="width:32px;height:32px;font-size:11px;background:#ffffff10;">${p.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>`}
                <span style="font-weight:600;">${p.name}</span>
              </div>
            </td>
            <td class="font-mono">${p.age} · ${t(S['mp_gender_'+p.gender])}</td>
            <td style="font-size:12.5px;">${t(p.lastSeenLocation)}</td>
            <td class="font-mono" style="font-size:12px;">${p.lastSeenAt.replace('T',' ')}</td>
            <td>${mpStatusBadge(p.status)}</td>
            <td style="font-size:12px;">${p.reporterName}<br><span style="color:var(--text-2);">${p.reporterPhone}</span></td>
          </tr>`).join('') || `<tr><td colspan="6" style="text-align:center; color:var(--text-2); padding:18px;">—</td></tr>`}
        </tbody>
      </table>
      </div>
    </div>

    <div class="glass card-pad" style="grid-column:span 12;">
      <div class="flex justify-between items-start" style="margin-bottom:6px; flex-wrap:wrap; gap:8px;">
        <div>
          <div style="font-weight:700;" data-i18n="cmd_title">${t(S.cmd_title)}</div>
          <div class="section-sub" data-i18n="cmd_sub">${t(S.cmd_sub)}</div>
        </div>
      </div>
      <div class="flex gap-2" style="margin:14px 0;">
        <input id="cmd-input" class="input-field" data-i18n-ph="cmd_placeholder" placeholder="${t(S.cmd_placeholder)}" style="flex:1;">
        <button class="btn-primary" onclick="issueCommand()" data-i18n="cmd_issue">${t(S.cmd_issue)}</button>
      </div>
      <div style="overflow-x:auto;">
      <table class="tbl">
        <thead><tr>
          <th data-i18n="col_command">${t(S.col_command)}</th><th data-i18n="col_issued_by">${t(S.col_issued_by)}</th>
          <th data-i18n="col_time">${t(S.col_time)}</th><th data-i18n="col_status">${t(S.col_status)}</th>
        </tr></thead>
        <tbody id="commands-tbody">${commandRowsHTML(m.id)}</tbody>
      </table>
      </div>
    </div>
  </div>`;
};
function selectMission(i){ SELECTED_MISSION = i; renderPage('missions'); }
function openMissionModal(){
  document.getElementById('modal-root').innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
    <div class="modal-box glass card-pad">
      <div class="flex justify-between items-center" style="margin-bottom:16px;">
        <div style="font-weight:700; font-size:16px;">${LANG.cur==='en'?'Create New Mission':'إنشاء مهمة جديدة'}</div>
        <button class="icon-btn" onclick="closeModal()">✕</button>
      </div>
      <div class="flex flex-col gap-3">
        <div><label style="font-size:12px; color:var(--text-1);">${LANG.cur==='en'?'Mission Name':'اسم المهمة'}</label><input class="input-field" placeholder="${LANG.cur==='en'?'e.g. Jebel Shams Search':'مثال: بحث جبل شمس'}"></div>
        <div><label style="font-size:12px; color:var(--text-1);">${LANG.cur==='en'?'Location':'الموقع'}</label><input class="input-field" placeholder="${LANG.cur==='en'?'Region / Wilayat':'المنطقة / الولاية'}"></div>
        <div class="grid" style="grid-template-columns:1fr 1fr; gap:10px;">
          <div><label style="font-size:12px; color:var(--text-1);">${LANG.cur==='en'?'Assign Team':'تكليف فريق'}</label><select class="input-field"><option>Alpha Rescue</option><option>Bravo Team</option><option>Desert Unit Echo</option></select></div>
          <div><label style="font-size:12px; color:var(--text-1);">${LANG.cur==='en'?'Assign Drone':'تكليف طائرة مسيّرة'}</label><select class="input-field"><option>D-01</option><option>D-02</option><option>D-05</option></select></div>
        </div>
        <button class="btn-primary" style="margin-top:8px;" onclick="closeModal()">${LANG.cur==='en'?'Dispatch Mission':'إرسال المهمة'}</button>
      </div>
    </div>
  </div>`;
}
function closeModal(){ document.getElementById('modal-root').innerHTML=''; }

/* ---------- MISSING PERSON STATUS BADGE ---------- */
function mpStatusBadge(status){
  const cls = status==='found' ? 'active' : status==='search_active' ? 'high' : 'idle';
  return `<span class="badge badge-${cls}">${t(S['mp_status_'+status])}</span>`;
}

/* ---------- COMMAND & OPERATIONS TRACKING ---------- */
function cmdStatusBadge(status){
  const cls = status==='completed' ? 'active' : status==='in_progress' ? 'analyzing' : 'critical';
  return `<span class="badge badge-${cls}">${t(S['status_'+(status==='in_progress'?'inprogress':status)])}</span>`;
}
function commandRowsHTML(missionId){
  const rows = COMMANDS.filter(c=>c.missionId===missionId);
  if(!rows.length) return `<tr><td colspan="4" style="text-align:center; color:var(--text-2); padding:18px;">—</td></tr>`;
  return rows.slice().reverse().map(c=>`
    <tr>
      <td>${t(c.text)}</td>
      <td style="font-size:12.5px;">${t(c.issuedBy)}</td>
      <td class="font-mono">${c.time}</td>
      <td>${cmdStatusBadge(c.status)}${c.status==='in_progress'?' <span class="thinking-dots" style="margin-inline-start:4px;"><span></span><span></span><span></span></span>':''}</td>
    </tr>`).join('');
}
function refreshCommandsTable(){
  const el = document.getElementById('commands-tbody');
  if(!el || CURRENT_PAGE!=='missions') return;
  const m = MISSIONS[SELECTED_MISSION];
  el.innerHTML = commandRowsHTML(m.id);
}
function issueCommand(){
  const input = document.getElementById('cmd-input');
  if(!input || !input.value.trim()) return;
  const m = MISSIONS[SELECTED_MISSION];
  CMD_SEQ++;
  COMMANDS.push({
    id:'CMD-'+String(CMD_SEQ).padStart(3,'0'),
    missionId:m.id,
    text:{en:input.value.trim(), ar:input.value.trim()},
    issuedBy:{en:'Commander (manual)', ar:'القائد (يدوي)'},
    time:new Date().toLocaleTimeString('en-GB',{hour:'2-digit',minute:'2-digit'}),
    status:'in_progress',
    ticks: 2 + Math.floor(Math.random()*3),
  });
  input.value = '';
  refreshCommandsTable();
}
function tickCommands(){
  COMMANDS.forEach(c=>{
    if(c.status!=='in_progress') return;
    c.ticks--;
    if(c.ticks<=0){
      c.status = Math.random() < 0.85 ? 'completed' : 'failed'; // verifies execution outcome automatically
    }
  });
}
setInterval(()=>{ tickCommands(); refreshCommandsTable(); }, 5000);

/* ---------- MISSING PERSON INTAKE ---------- */
let MP_PENDING_PHOTO = null;
function openMissingPersonModal(){
  MP_PENDING_PHOTO = null;
  document.getElementById('modal-root').innerHTML = `
  <div class="modal-backdrop" onclick="if(event.target===this) closeModal()">
    <div class="modal-box glass card-pad">
      <div class="flex justify-between items-center" style="margin-bottom:16px;">
        <div style="font-weight:700; font-size:16px;" data-i18n="mp_form_title">${t(S.mp_form_title)}</div>
        <button class="icon-btn" onclick="closeModal()">✕</button>
      </div>
      <div class="flex flex-col gap-3">
        <div><label style="font-size:12px; color:var(--text-1);" data-i18n="mp_name">${t(S.mp_name)}</label><input id="mp-name" class="input-field"></div>
        <div class="grid" style="grid-template-columns:1fr 1fr; gap:10px;">
          <div><label style="font-size:12px; color:var(--text-1);" data-i18n="mp_age">${t(S.mp_age)}</label><input id="mp-age" type="number" min="0" max="120" class="input-field"></div>
          <div><label style="font-size:12px; color:var(--text-1);" data-i18n="mp_gender">${t(S.mp_gender)}</label>
            <select id="mp-gender" class="input-field">
              <option value="male">${t(S.mp_gender_male)}</option>
              <option value="female">${t(S.mp_gender_female)}</option>
            </select>
          </div>
        </div>
        <div>
          <label style="font-size:12px; color:var(--text-1);" data-i18n="mp_photo">${t(S.mp_photo)}</label>
          <input id="mp-photo" type="file" accept="image/*" class="input-field" style="padding:8px;" onchange="handleMissingPersonPhoto(this)">
        </div>
        <div>
          <label style="font-size:12px; color:var(--text-1);" data-i18n="mp_description">${t(S.mp_description)}</label>
          <textarea id="mp-description" class="input-field" rows="3" data-i18n-ph="mp_description_ph" placeholder="${t(S.mp_description_ph)}" style="resize:vertical;"></textarea>
        </div>
        <div><label style="font-size:12px; color:var(--text-1);" data-i18n="mp_last_seen_location">${t(S.mp_last_seen_location)}</label><input id="mp-location" class="input-field"></div>
        <div><label style="font-size:12px; color:var(--text-1);" data-i18n="mp_last_seen_at">${t(S.mp_last_seen_at)}</label><input id="mp-datetime" type="datetime-local" class="input-field"></div>

        <div style="border-top:1px solid var(--border); margin-top:6px; padding-top:14px;">
          <div style="font-size:12.5px; font-weight:700; color:var(--text-1); margin-bottom:10px;" data-i18n="mp_reporter_section">${t(S.mp_reporter_section)}</div>
          <div class="flex flex-col gap-3">
            <div><label style="font-size:12px; color:var(--text-1);" data-i18n="mp_reporter_name">${t(S.mp_reporter_name)}</label><input id="mp-reporter-name" class="input-field"></div>
            <div class="grid" style="grid-template-columns:1fr 1fr; gap:10px;">
              <div><label style="font-size:12px; color:var(--text-1);" data-i18n="mp_reporter_phone">${t(S.mp_reporter_phone)}</label><input id="mp-reporter-phone" class="input-field" type="tel"></div>
              <div><label style="font-size:12px; color:var(--text-1);" data-i18n="mp_reporter_relation">${t(S.mp_reporter_relation)}</label><input id="mp-reporter-relation" class="input-field"></div>
            </div>
          </div>
        </div>

        <button class="btn-primary" style="margin-top:8px;" onclick="submitMissingPersonReport()" data-i18n="mp_submit">${t(S.mp_submit)}</button>
      </div>
    </div>
  </div>`;
}
function handleMissingPersonPhoto(input){
  const file = input.files && input.files[0];
  if(!file) return;
  const reader = new FileReader();
  reader.onload = (e)=>{ MP_PENDING_PHOTO = e.target.result; };
  reader.readAsDataURL(file);
}
function submitMissingPersonReport(){
  const val = (id)=> (document.getElementById(id)||{}).value || '';
  const name = val('mp-name').trim();
  if(!name){ document.getElementById('mp-name').focus(); return; }

  MP_SEQ++;
  MISSING_PERSONS_REPORTS.unshift({
    id:'MP-'+String(MP_SEQ).padStart(3,'0'),
    missionId:null,
    name,
    age: parseInt(val('mp-age'),10) || null,
    gender: val('mp-gender') || 'male',
    photo: MP_PENDING_PHOTO,
    description:{en:val('mp-description'), ar:val('mp-description')},
    lastSeenLocation:{en:val('mp-location'), ar:val('mp-location')},
    lastSeenAt: val('mp-datetime') || new Date().toISOString().slice(0,16),
    reporterName: val('mp-reporter-name'),
    reporterPhone: val('mp-reporter-phone'),
    reporterRelation:{en:val('mp-reporter-relation'), ar:val('mp-reporter-relation')},
    status:'reported',
  });
  closeModal();
  renderPage('missions');
}

/* ---------- PERSONNEL ---------- */
let PERSON_FILTER = 'all';
PAGES.personnel = function(){
  const list = PERSON_FILTER==='all' ? PERSONNEL : PERSONNEL.filter(p=>p.cat===PERSON_FILTER);
  const filters = [['all','filter_all'],['rescue','filter_rescue'],['volunteer','filter_volunteers'],['police','filter_police'],['civil','filter_civil'],['medical','filter_medical']];
  return `
  <div style="margin-bottom:18px;">
    <div class="section-title font-display" data-i18n="personnel_title">${t(S.personnel_title)}</div>
    <div class="section-sub" data-i18n="personnel_sub">${t(S.personnel_sub)}</div>
  </div>
  <div class="flex gap-2" style="margin-bottom:18px; flex-wrap:wrap;">
    ${filters.map(([k,l])=>`<div class="chip" style="cursor:pointer; ${PERSON_FILTER===k?'border-color:var(--orange); color:var(--orange); background:var(--orange-dim);':''}" onclick="setPersonFilter('${k}')">${t(S[l])}</div>`).join('')}
  </div>
  <div class="grid-dash">
    ${list.map(p=>`
    <div class="glass card-pad person-card" style="grid-column:span 4;">
      <div class="flex items-center gap-3" style="margin-bottom:12px;">
        <div class="avatar-circle" style="background:#ffffff10; color:var(--text-0);">${p.name.split(' ').map(n=>n[0]).slice(0,2).join('')}</div>
        <div>
          <div style="font-weight:700; font-size:14px;">${p.name}</div>
          <div style="font-size:11.5px; color:var(--text-2);">${t(p.rank)}</div>
        </div>
        <span class="badge badge-${p.avail==='available'?'active':'idle'}" style="margin-inline-start:auto;">${t(S['status_'+p.avail])}</span>
      </div>
      <div class="flex gap-1" style="flex-wrap:wrap; margin-bottom:12px;">
        ${p.skills.map(s=>`<span class="skill-tag">${s}</span>`).join('')}
      </div>
      <div class="flex justify-between" style="font-size:12px; color:var(--text-1);">
        <span data-i18n="p_location">${t(S.p_location)}: <span style="color:var(--text-0);">${t(p.loc)}</span></span>
      </div>
      <div class="flex justify-between" style="font-size:12px; color:var(--text-1); margin-top:4px;">
        <span data-i18n="p_missions">${t(S.p_missions)}: <span class="font-mono" style="color:var(--text-0);">${p.missions}</span></span>
      </div>
    </div>`).join('')}
  </div>`;
};
function setPersonFilter(k){ PERSON_FILTER = k; renderPage('personnel'); }

/* ---------- DRONES ---------- */
PAGES.drones = function(){
  return `
  <div style="margin-bottom:18px;">
    <div class="section-title font-display" data-i18n="drones_title">${t(S.drones_title)}</div>
    <div class="section-sub" data-i18n="drones_sub">${t(S.drones_sub)}</div>
  </div>
  <div class="grid-dash">
    ${DRONES.map(d=>`
    <div class="glass card-pad" style="grid-column:span 6;">
      <div class="flex justify-between items-center" style="margin-bottom:12px;">
        <div style="font-weight:700; font-family:'JetBrains Mono',monospace; font-size:15px;">${d.id}</div>
        <div class="signal-bars">${[1,2,3,4,5].map(n=>`<i style="height:${n*2.6}px;" class="${n<=d.signal?'on':''}"></i>`).join('')}</div>
      </div>
      <div class="feed-frame" style="height:150px; margin-bottom:14px;">
        <div class="scan-line"></div>
        <div style="position:absolute; bottom:6px; left:8px; font-size:10px; font-family:'JetBrains Mono',monospace; color:var(--text-1);" data-i18n="d_live_preview">${t(S.d_live_preview)}</div>
      </div>
      <div class="grid" style="grid-template-columns:1fr 1fr; gap:10px; font-size:12px;">
        <div><span style="color:var(--text-2);" data-i18n="d_battery">${t(S.d_battery)}</span><div class="font-mono" style="font-weight:700; color:${d.battery<40?'var(--red)':'var(--teal)'};">${d.battery}%</div></div>
        <div><span style="color:var(--text-2);" data-i18n="d_speed">${t(S.d_speed)}</span><div class="font-mono" style="font-weight:700;">${d.speed} km/h</div></div>
        <div><span style="color:var(--text-2);" data-i18n="d_altitude">${t(S.d_altitude)}</span><div class="font-mono" style="font-weight:700;">${d.alt} m</div></div>
        <div><span style="color:var(--text-2);" data-i18n="d_camera">${t(S.d_camera)}</span><div style="font-weight:700; color:${d.cam==='ok'?'var(--teal)':'var(--amber)'};">${d.cam==='ok'?(LANG.cur==='en'?'Online':'متصلة'):(LANG.cur==='en'?'Signal Weak':'إشارة ضعيفة')}</div></div>
      </div>
      <div style="margin-top:10px; font-size:11.5px; color:var(--text-2);">GPS: <span class="font-mono">${d.gps}</span></div>
      <div style="margin-top:6px; font-size:12px;"><span style="color:var(--text-2);" data-i18n="d_mission">${t(S.d_mission)}</span>: <span style="font-weight:600;">${d.mission}</span></div>
    </div>`).join('')}
  </div>`;
};

/* ---------- ALERTS ---------- */
PAGES.alerts = function(){
  return `
  <div style="margin-bottom:18px;">
    <div class="section-title font-display" data-i18n="alerts_title2">${t(S.alerts_title2)}</div>
    <div class="section-sub" data-i18n="alerts_sub">${t(S.alerts_sub)}</div>
  </div>
  <div class="glass card-pad">
    <div class="flex flex-col gap-2">
      ${ALERTS.map((a,i)=>`
      <div class="alert-item" onclick="this.classList.toggle('read')">
        <div class="alert-icon" style="background:var(--${a.color}-dim); color:var(--${a.color});">
          ${a.t==='sos'?'🆘':a.t==='weather'?'⛈':a.t==='ai'?'🤖':a.t==='mission'?'📍':a.t==='team'?'👥':'⚠️'}
        </div>
        <div style="flex:1;">
          <div class="flex justify-between">
            <div style="font-weight:700; font-size:13.5px;">${t(a.title)}</div>
            <div style="font-size:11px; color:var(--text-2);">${a.time} ${LANG.cur==='en'?'ago':'مضت'}</div>
          </div>
          <div style="font-size:12.5px; color:var(--text-1); margin-top:2px;">${t(a.msg)}</div>
        </div>
      </div>`).join('')}
    </div>
  </div>`;
};

/* ---------- ANALYTICS ---------- */
PAGES.analytics = function(){
  return `
  <div style="margin-bottom:18px;">
    <div class="section-title font-display" data-i18n="analytics_title">${t(S.analytics_title)}</div>
    <div class="section-sub" data-i18n="analytics_sub">${t(S.analytics_sub)}</div>
  </div>
  <div class="grid-dash">
    <div class="glass card-pad" style="grid-column:span 6;"><div style="font-weight:700; margin-bottom:10px;" data-i18n="a_monthly">${t(S.a_monthly)}</div><canvas id="chart-monthly" height="110"></canvas></div>
    <div class="glass card-pad" style="grid-column:span 6;"><div style="font-weight:700; margin-bottom:10px;" data-i18n="a_response">${t(S.a_response)}</div><canvas id="chart-resp2" height="110"></canvas></div>
    <div class="glass card-pad" style="grid-column:span 4;"><div style="font-weight:700; margin-bottom:10px;" data-i18n="a_success">${t(S.a_success)}</div><canvas id="chart-success" height="150"></canvas></div>
    <div class="glass card-pad" style="grid-column:span 4;"><div style="font-weight:700; margin-bottom:10px;" data-i18n="a_drone_usage">${t(S.a_drone_usage)}</div><canvas id="chart-drone-usage" height="150"></canvas></div>
    <div class="glass card-pad" style="grid-column:span 4;"><div style="font-weight:700; margin-bottom:10px;" data-i18n="a_ai_acc">${t(S.a_ai_acc)}</div><canvas id="chart-ai-acc" height="150"></canvas></div>
    <div class="glass card-pad" style="grid-column:span 12;"><div style="font-weight:700; margin-bottom:10px;" data-i18n="a_team_perf">${t(S.a_team_perf)}</div><canvas id="chart-team-perf" height="80"></canvas></div>
  </div>`;
};

/* =========================================================
   CHARTS (after render)
   ========================================================= */
function destroyChart(id){ if(charts[id]){ charts[id].destroy(); delete charts[id]; } }
const CHART_GRID = '#ffffff0f';
const CHART_TEXT = '#8b96a5';
Chart.defaults.color = CHART_TEXT;
Chart.defaults.font.family = "'Inter',sans-serif";

AFTER_RENDER = {};
AFTER_RENDER.dashboard = function(){
  destroyChart('chart-response-trend');
  const ctx = document.getElementById('chart-response-trend');
  if(!ctx) return;
  charts['chart-response-trend'] = new Chart(ctx, {
    type:'line',
    data:{ labels:['-6d','-5d','-4d','-3d','-2d','-1d', LANG.cur==='en'?'Today':'اليوم'],
      datasets:[{ data:[21,19,23,18,17,19,17.4], borderColor:'#2adfc9', backgroundColor:'#2adfc922', fill:true, tension:.4, pointRadius:3, pointBackgroundColor:'#2adfc9' }]},
    options:{ plugins:{legend:{display:false}}, scales:{ x:{grid:{color:'transparent'}}, y:{grid:{color:CHART_GRID}} } }
  });
};
AFTER_RENDER.ai = function(){
  destroyChart('chart-ai-confidence');
  const ctx = document.getElementById('chart-ai-confidence');
  if(!ctx) return;
  charts['chart-ai-confidence'] = new Chart(ctx, {
    type:'line',
    data:{ labels:['08:00','08:20','08:40','09:00','09:20','09:40'],
      datasets:[{ data:[74,79,68,85,90,91], borderColor:'#4f8dfd', backgroundColor:'#4f8dfd22', fill:true, tension:.35, pointRadius:2 }]},
    options:{ plugins:{legend:{display:false}}, scales:{ x:{grid:{color:'transparent'}}, y:{grid:{color:CHART_GRID}, min:0, max:100} } }
  });
};
AFTER_RENDER.analytics = function(){
  const months = LANG.cur==='en' ? ['Jan','Feb','Mar','Apr','May','Jun'] : ['يناير','فبراير','مارس','أبريل','مايو','يونيو'];
  destroyChart('chart-monthly');
  let c = document.getElementById('chart-monthly');
  if(c) charts['chart-monthly'] = new Chart(c,{type:'bar', data:{labels:months, datasets:[{data:[38,42,51,47,60,55], backgroundColor:'#ff7a3d'}]}, options:{plugins:{legend:{display:false}}, scales:{x:{grid:{color:'transparent'}}, y:{grid:{color:CHART_GRID}}}}});

  destroyChart('chart-resp2');
  c = document.getElementById('chart-resp2');
  if(c) charts['chart-resp2'] = new Chart(c,{type:'line', data:{labels:months, datasets:[{data:[22,21,19,20,18,17.4], borderColor:'#2adfc9', backgroundColor:'#2adfc922', fill:true, tension:.4}]}, options:{plugins:{legend:{display:false}}, scales:{x:{grid:{color:'transparent'}}, y:{grid:{color:CHART_GRID}}}}});

  destroyChart('chart-success');
  c = document.getElementById('chart-success');
  if(c) charts['chart-success'] = new Chart(c,{type:'doughnut', data:{labels:[LANG.cur==='en'?'Success':'ناجحة', LANG.cur==='en'?'Ongoing':'جارية', LANG.cur==='en'?'Unresolved':'غير محلولة'], datasets:[{data:[78,15,7], backgroundColor:['#2adfc9','#ffbb3d','#f5385e'], borderWidth:0}]}, options:{plugins:{legend:{position:'bottom', labels:{boxWidth:10,font:{size:11}}}}}});

  destroyChart('chart-drone-usage');
  c = document.getElementById('chart-drone-usage');
  if(c) charts['chart-drone-usage'] = new Chart(c,{type:'bar', data:{labels:['D-01','D-02','D-03','D-04','D-05'], datasets:[{data:[42,18,63,27,55], backgroundColor:'#4f8dfd'}]}, options:{indexAxis:'y', plugins:{legend:{display:false}}, scales:{x:{grid:{color:CHART_GRID}}, y:{grid:{color:'transparent'}}}}});

  destroyChart('chart-ai-acc');
  c = document.getElementById('chart-ai-acc');
  if(c) charts['chart-ai-acc'] = new Chart(c,{type:'line', data:{labels:months, datasets:[{data:[81,83,86,88,90,92], borderColor:'#ffbb3d', backgroundColor:'#ffbb3d22', fill:true, tension:.4}]}, options:{plugins:{legend:{display:false}}, scales:{x:{grid:{color:'transparent'}}, y:{grid:{color:CHART_GRID}, min:60, max:100}}}});

  destroyChart('chart-team-perf');
  c = document.getElementById('chart-team-perf');
  if(c) charts['chart-team-perf'] = new Chart(c,{type:'bar', data:{labels:['Alpha','Bravo','Coast Guard Delta','Desert Echo','Civil Defense'], datasets:[{data:[92,87,95,81,88], backgroundColor:'#ff7a3d'}]}, options:{plugins:{legend:{display:false}}, scales:{x:{grid:{color:'transparent'}}, y:{grid:{color:CHART_GRID}, min:0, max:100}}}});
};

/* =========================================================
   INIT
   ========================================================= */
document.getElementById('hamburger').style.display = window.innerWidth<=760 ? 'flex' : 'none';
window.addEventListener('resize', ()=>{ document.getElementById('hamburger').style.display = window.innerWidth<=760 ? 'flex' : 'none'; });
buildRoleChips();
applyStaticI18n();
