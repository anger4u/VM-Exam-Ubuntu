{"version":3,"file":"script.min.js","sources":["script.js"],"names":["BX","Forum","transliterate","repo","node","onblur","clearInterval","bxfInterval","setInterval","value","bxValue","translit","max_len","change_case","replace_space","replace_other","delete_repeat_replace","use_google","callback","result","nextSibling","AddTags","a","parentNode","div","previousSibling","switcher","show","remove","innerHTML","inputs","getElementsByTagName","i","length","type","toUpperCase","CorrectTags","focus","oObj","id","fTextToNode","text","tmpdiv","create","childNodes","PostFormAjaxStatus","status","arNote","findChild","document","className","arMsgBox","findChildren","msgBox","statusDIV","beforeDivs","tmp","nodeType","insert","hasOwnProperty","hasClass","insertBefore","PostFormAjaxNavigation","navString","pageNumber","navDIV","navPlaceholders","window","PostFormAjaxMsgStart","msg","msgNode","navPlaceholder","fReplaceOrInsertNode","sourceNode","targetNode","parentTargetNode","beforeTargetNode","nextNode","isDomNode","isArray","removeChild","appendChild","fRunScripts","ob","processHTML","ajax","processScripts","SCRIPT","PostFormAjaxResponse","response","postform","forumAjaxPostTmp","reload","arForumlist","forumlist","formlist","tagName","message","listparent","navigation","ClearForumPostForm","allMessages","lastMessage","footerActions","previewDIV","previewParent","scrollToNode","arr","butt","getAttribute","disabled","attr","name","form","LHEPostForm","reinitDataBefore","editor","getEditor","handler","getHandler","CheckAndReInit","arFiles","hide","attachNodes","attachNode","pop","captchaIMAGE","captchaHIDDEN","captchaINPUT","captchaDIV","tag","getCaptcha","src","SetForumAjaxPostTmp","ValidateForm","ajax_post","Get","SaveContent","errors","Message","GetContent","MessageLength","MessageMax","TITLE","replace","alert","oEls","oEl","ii","push","adjust","clone","attrs","pageNumberInput","props","setTimeout","submit","ShowLastEditReason","checked","ShowVote","vote_remove_answer","obj","vote_add_answer","answer","firstChild","regexp","number","exec","q","parseInt","confirm","bFromRemoveAnswerFunction","ol","lastChild","html","vote_remove_question","anchor","question","vote_add_question","iQuestion","quoteMessageEx","mid","selection","toolbar","controls","Quote","range","GetRange","GetSelection","collapsed","tmpDiv","toHtml","GetIframeDoc","util","GetTextContentEx","DoNothing","videoWMV","str","p1","rWmv","res","rFlv","search","regexReplaceTableTag","s","replacement","re_match","RegExp","re_replace","ij","browser","IsIE","author","hasAttribute","GetViewMode","bbCode","SetBxTag","params","ParseContentFromBbCode","action","actions","quote","setExternalSelection","Exec","fAutosave","bind","pEditorDocument","proxy","Init","reply2author","textareaView","WrapWith","InsertHtml","Focus","defer","addCustomEvent","AddButton","iconClassName","disabledForTextarea","toolbarSort","textbody","bTranslited","arStack","bPushTag","offset","bPopTag","shift","r","capitEngLettersReg","capitRusLetters","smallEngLettersReg","smallRusLetters","capitRusLettersReg","capitEngLetters","smallRusLettersReg","smallEngLetters","content","SetContent","insertImageAfterUpload","formID","forms","e","PreventDefault","oCaptcha","Captcha","Show","ready","Update","this","input","hidden","image","prototype","iframe","_checkDisplay","d","style","display","UpdateControls","data"],"mappings":"CAAC,WACA,GAAIA,GAAGC,OAASD,GAAGC,MAAMC,cACxB,MACDF,IAAGC,MAASD,GAAGC,MAAQD,GAAGC,QAC1B,IAAIE,KAEJH,IAAGC,MAAMC,cAAgB,SAASE,GAEjCA,EAAKC,OAAS,WAAYC,cAAcF,EAAKG,aAC7CH,GAAKG,YAAcC,YAAY,WAC9B,GAAIJ,EAAKK,OAASL,EAAKM,QACvB,CACCN,EAAKM,QAAUN,EAAKK,KACpBT,IAAGW,SAASP,EAAKK,OAChBG,QAAY,GACZC,YAAgB,IAChBC,cAAkB,IAClBC,cAAkB,GAClBC,sBAA0B,KAC1BC,WAAe,KACfC,SAAa,SAASC,GAASf,EAAKgB,YAAYX,MAAQU,OAGxD,KAKJnB,IAAGC,MAAMoB,QAAU,SAASC,GAE3B,GAAIA,GAAKA,EAAEC,WACX,CACC,GACCC,GAAMF,EAAEC,WAAWA,WAAWE,gBAC9BC,EAAWJ,EAAEC,WAAWA,UACzBvB,IAAG2B,KAAKH,EACRxB,IAAG4B,OAAON,EAAEC,WACZ,IAAIG,EAASG,YAAc,GAC1B7B,GAAG4B,OAAOF,EAEX,IAAII,GAASN,EAAIO,qBAAqB,QACtC,KAAK,GAAIC,GAAI,EAAIA,EAAIF,EAAOG,OAASD,IACrC,CACC,GAAIF,EAAOE,GAAGE,KAAKC,eAAiB,OACpC,CACCnC,GAAGC,MAAMmC,YAAYN,EAAOE,GAC5BF,GAAOE,GAAGK,OACV,SAIH,MAAO,OAGRrC,IAAGC,MAAMmC,YAAc,SAASE,GAE/B,GAAItC,GAAG,kBACNA,GAAG,kBAAkBuC,GAAKD,EAAKC,GAAK,aAItC,IACCC,GAAc,SAAUC,GAEvB,GAAIC,GAAS1C,GAAG2C,OAAO,MACvBD,GAAOb,UAAYY,CACnB,IAAIC,EAAOE,WAAWX,OAAS,EAC9B,MAAOS,GAAOE,WAAW,OAEzB,OAAO,OAETC,EAAqB,SAAUC,GAE9B,GAAIC,GAAS/C,GAAGgD,UAAUC,UAAYC,UAAY,kBAAoB,KAAM,MAAOlB,CACnF,IAAIe,EACJ,CACC,IAAKf,EAAI,EAAGA,EAAIe,EAAOd,OAAQD,IAC/B,CACChC,GAAG4B,OAAOmB,EAAOf,KAInB,GAAImB,GAAWnD,GAAGoD,aAAaH,UAAYC,UAAY,yBAA4B,KACnF,KAAKC,GAAYA,EAASlB,OAAS,EAAG,MACtC,IAAIoB,GAASF,EAASA,EAASlB,OAAS,EAExC,IAAIa,EAAOb,OAAS,EAAG,MAEvB,IAAIqB,GAAYd,EAAYM,EAC5B,KAAKQ,EAAW,MAEhB,IAAIC,IAAe,iBAAkB,mBAAoB,mBACzD,IAAIC,GAAMH,CACV,QAAQG,EAAMA,EAAIpC,gBAAkBoC,EACpC,CACC,GAAIA,EAAIC,UAAY,EACpB,CACC,GAAIC,GAAS,KACb,KAAK1B,IAAKuB,GACV,CACC,GAAIA,EAAWI,eAAe3B,IAAMhC,GAAG4D,SAASJ,EAAKD,EAAWvB,IAChE,CACC0B,EAAS,IACT,QAGF,GAAIA,EACJ,CACCF,EAAIjC,WAAWsC,aAAaP,EAAWE,EACvC,WAKJM,EAAyB,SAASC,EAAWC,GAE5C,GAAIC,GAASzB,EAAYuB,GAAY/B,CACrC,KAAKiC,EAAQ,MACb,IAAIC,GAAkBlE,GAAGoD,aAAaH,UAAYC,UAAY,wBAA2B,KACzF,KAAKgB,EAAiB,MACtB,KAAKlC,EAAI,EAAGA,EAAIkC,EAAgBjC,OAAQD,IACvCkC,EAAgBlC,GAAGH,UAAYoC,EAAOpC,SACvCsC,QAAO,UAAU,eAAiBH,GAEnCI,EAAuB,SAASC,GAE/B,GAAIC,GAAU9B,EAAY6B,EAC1B,KAAKC,EAAS,MACd,IAAIC,GAAiBvE,GAAGgD,UAAUC,UAAYC,UAAY,wBAA0B,KACpF,KAAKqB,EAAgB,MACrBA,GAAehD,WAAWsC,aAAaS,EAASC,IAEjDC,EAAuB,SAASC,EAAYC,EAAYC,EAAkBC,GAEzE,GAAIC,GAAW,IAEf,KAAK7E,GAAGkC,KAAK4C,UAAUH,GAAmB,MAAO,MAEjD,KAAK3E,GAAGkC,KAAK4C,UAAUL,KAAgBzE,GAAGkC,KAAK6C,QAAQN,IAAeA,EAAWxC,OAAS,EACzF,KAAOwC,EAAajC,EAAYiC,IAAc,MAAO,MAEtD,IAAIzE,GAAGkC,KAAK4C,UAAUJ,GACtB,CACCG,EAAWH,EAAWtD,WACtBsD,GAAWnD,WAAWyD,YAAYN,GAGnC,IAAKG,EACJA,EAAW7E,GAAGgD,UAAU2B,EAAkBC,EAAkB,KAE7D,IAAIC,EACJ,CACCA,EAAStD,WAAWsC,aAAaY,EAAYI,OACvC,CACNF,EAAiBM,YAAYR,GAG9B,MAAO,OAERS,EAAc,SAASb,GAEtB,GAAIc,GAAKnF,GAAGoF,YAAYf,EAAK,KAC7BrE,IAAGqF,KAAKC,eAAeH,EAAGI,OAAQ,OAEnCC,EAAuB,SAASC,EAAUC,GAEzCA,EAAS,qBAAuB,IAChC,IAAIvE,GAASgD,OAAOwB,gBACpB,UAAWxE,IAAU,YACrB,CACCnB,GAAG4F,QACH,QAGD,GAAIC,GAAc7F,GAAGoD,aAAaH,UAAWC,UAAW,qBAAsB,KAC9E,KAAM2C,GAAeA,EAAY5D,OAAQ,EACxCjC,GAAG4F,QACJ,IAAIxF,GAAM0F,EAAYD,EAAYA,EAAY5D,OAAO,GACpD8D,EAAW/F,GAAGgD,UAAU8C,GAAYE,QAAS,OAAQ9C,UAAW,cAAe,KAChF4C,KAAeC,EAAWA,EAAWD,CAErC,IAAI3E,EAAO2B,OACX,CACC,GAAI3B,EAAO,eACX,CACC,IAAMA,EAAO8E,QAAS,MAEtB,IAAIC,GAAaJ,EAAUvE,UAC3BvB,IAAG4B,OAAOkE,EACVI,GAAWrE,WAAaV,EAAO8E,OAE/B,MAAM9E,EAAOgF,cAAgBhF,EAAO6C,WACpC,CACCF,EAAuB3C,EAAOgF,WAAYhF,EAAO6C,YAElD,KAAM7C,EAAO,gBACb,CACCiD,EAAqBjD,EAAO,iBAE7BiF,EAAmBV,EACnBR,GAAY/D,EAAO8E,aAEf,UAAW9E,GAAO8E,SAAW,YAClC,CACC,GAAII,GAAcrG,GAAGoD,aAAa0C,GAAYE,QAAS,QAAS9C,UAAW,oBAAqB,KAChG,IAAImD,EAAYpE,OAAS,EACzB,CACC,GAAIqE,GAAcD,EAAYA,EAAYpE,OAAS,GAClDsE,EAAgBvG,GAAGgD,UAAUsD,GAAeN,QAAU,SAAW,KAClE,IAAIO,EACHvG,GAAG4B,OAAO2E,GAEZT,EAAUjE,WAAaV,EAAO8E,OAC9BG,GAAmBV,EACnBR,GAAY/D,EAAO8E,aAEf,IAAI9E,EAAO,kBAChB,CACC,GAAIqF,GAAaxG,GAAGgD,UAAUC,UAAWC,UAAW,iBAAkB,MACrEuD,EAAgBzG,GAAGgD,UAAUC,UAAWC,UAAY,mBAAoB,MAAM3B,UAC/EiD,GAAqBrD,EAAO,kBAAmBqF,EAAYC,GAAgBvD,UAAY,mBAEvFL,GAAmB,GACnBqC,GAAY/D,EAAO,mBAGpB,KAAMA,EAAO,aACZ,IAAKf,EAAOJ,GAAG,UAAUmB,EAAO,kBAAoBf,EACnDJ,GAAG0G,aAAatG,GAGnB,GAAIuG,GAAMjB,EAAS3D,qBAAqB,QACxC,KAAK,GAAIC,GAAE,EAAGA,EAAI2E,EAAI1E,OAAQD,IAC9B,CACC,GAAI4E,GAAOD,EAAI3E,EACf,IAAI4E,EAAKC,aAAa,SAAW,SAChCD,EAAKE,SAAW,MAGlB9G,GAAG4B,OAAO5B,GAAGgD,UAAU0C,GAAYqB,MAAWC,KAAS,eAAiB,MAExE,IAAI7F,EAAO,iBACV0B,EAAmB1B,EAAO,mBAE5BiF,EAAqB,SAASa,GAE7B9C,OAAO+C,YAAYC,iBAAiB,eACpC,IAAIC,GAASF,YAAYG,UAAU,gBAAiBjH,EAAMkH,EAAUJ,YAAYK,WAAW,eAC3F,IAAIH,EACJ,CACCA,EAAOI,eAAe,GACtB,KAAK,GAAIxF,KAAKsF,GAAQG,QACtB,CACC,GAAIH,EAAQG,QAAQ9D,eAAe3B,GACnC,CACC,IAAK5B,EAAOJ,GAAG,WAAWsH,EAAQG,QAAQzF,GAAG,WAAa5B,EAC1D,CACCJ,GAAG4B,OAAOxB,EACVJ,IAAG0H,KAAK1H,GAAG,SAASsH,EAAQG,QAAQzF,GAAG,OACvChC,IAAG4B,OAAO5B,GAAG,eAAiBsH,EAAQG,QAAQzF,GAAG,WAMrD,IAAKhC,GAAGkC,KAAK4C,UAAUmC,GAAO,MAE9B,KAAK7G,EAAOJ,GAAGgD,UAAUC,UAAWC,UAAc,iBAAkB,UAAY9C,EAC/EJ,GAAG4B,OAAOxB,EAEX,IAAIuH,GAAc3H,GAAGgD,UAAUiE,GAAOjB,QAAY,KAAM9C,UAAY,cAAe,KAAM,MACxF0E,EAAa,IACd,IAAID,EACH,OAAQC,EAAaD,EAAYE,UAAYD,EAC5C5H,GAAG0H,KAAKE,EAEV,IAAIE,GAAe,KAClBC,EAAgB/H,GAAGgD,UAAUiE,GAAOF,MAAQC,KAAQ,iBAAkB,MACtEgB,EAAehI,GAAGgD,UAAUiE,GAAOF,MAAOC,KAAO,iBAAkB,MACnEiB,EAAajI,GAAGgD,UAAUiE,GAAO/D,UAAY,mCAAoC,KAElF,IAAI+E,EACHH,EAAe9H,GAAGgD,UAAUiF,GAAaC,IAAM,OAChD,IAAIH,GAAiBC,GAAgBF,EACrC,CACCE,EAAavH,MAAQ,EACrBT,IAAGqF,KAAK8C,WAAW,SAAShH,GAC3B4G,EAActH,MAAQU,EAAO,cAC7B2G,GAAaM,IAAM,0CAA0CjH,EAAO,kBAKxEnB,IAAGC,MAAMoI,oBAAsB,SAAS5F,GAEvC0B,OAAOwB,iBAAmBlD,EAK3BzC,IAAGC,MAAMqI,aAAe,SAASrB,EAAMsB,GAEtC,GAAItB,EAAK,qBAAsB,MAAO,KACtC,IAAIG,GAAUjD,OAAO,gBAAkBA,OAAO,gBAAgBqE,IAAI,gBAAkB,KACpF,UAAWvB,IAAQ,WAAaA,EAAK,kBAAoBG,EACxD,MAAO,MACR,UAAWjD,QAAO,WAAa,YAC9BA,OAAO,YACRiD,GAAOqB,aACP,IACCC,GAAS,GACTC,EAAUvB,EAAOwB,aACjBC,EAAgBF,EAAQ1G,OACxB6G,EAAa,IACd,IAAI7B,EAAK8B,OAAU9B,EAAK8B,MAAMtI,MAAMwB,QAAU,EAC7CyG,GAAU1I,GAAGiG,QAAQ,gBACtB,IAAI4C,GAAiB,EACpBH,GAAU1I,GAAGiG,QAAQ,kBACjB,IAAI4C,EAAgBC,EACxBJ,GAAU1I,GAAGiG,QAAQ,WAAW+C,QAAQ,iBAAkBF,GAAYE,QAAQ,aAAcH,EAE7F,IAAIH,IAAW,GACf,CACCO,MAAMP,EACN,OAAO,OAGR,GAAIzB,EAAK,WACT,CACC,GACCiC,MACAC,EAAMnJ,GAAGkC,KAAK4C,UAAUmC,EAAK,YAAcA,EAAK,WAAaA,EAAK,WAAW,GAC7EmC,EAAKpJ,GAAGkC,KAAK4C,UAAUmC,EAAK,YAAc,MAAQ,CACnD,GACA,CACC,IAAMjH,GAAG,eAAiBmJ,EAAI1I,OAC9B,CACCyI,EAAKG,KACJrJ,GAAGsJ,OACFtJ,GAAGuJ,MAAMJ,IACRK,OAASxC,KAAO,oBAAqBzE,GAAM,eAAiB4G,EAAI1I,UAIpE0I,EAAOC,IAAO,MAAQ,MAASA,EAAMnC,EAAK,WAAWhF,OAASgF,EAAK,WAAWmC,KAAQ,cAC5ED,EACX,OAAOD,EAAKjH,OAAS,EACpBgF,EAAKhC,YAAYiE,EAAKrB,OAGxB,GAAIlB,GAAMM,EAAKlF,qBAAqB,QACpC,KAAK,GAAIC,GAAE,EAAGA,EAAI2E,EAAI1E,OAAQD,IAC9B,CACC,GAAI4E,GAAOD,EAAI3E,EACf,IAAI4E,EAAKC,aAAa,SAAW,SAChCD,EAAKE,SAAW,KAGlB,GAAIyB,GAAa,IACjB,CACC,GAAI7C,GAAWuB,CACf,UAAW9C,QAAO,WAAa,mBAAsBA,QAAO,UAAU,gBAAkB,YACxF,CACC,GAAIsF,GAAkBzJ,GAAGgD,UAAU0C,GAAWqB,MAAQC,KAAO,eAC7D,KAAKyC,EACL,CACCA,EAAkBzJ,GAAG2C,OAAO,SAAU+G,OAASxH,KAAO,SAAU8E,KAAO,eACvEyC,GAAgBhJ,MAAQ0D,OAAO,UAAU,cACzCuB,GAAST,YAAYwE,OACf,CACNA,EAAgBhJ,MAAQ0D,OAAO,UAAU,gBAG3CwF,WAAW,WAAa3J,GAAGqF,KAAKuE,OAAOlE,EAAU,SAASD,GAAWD,EAAqBC,EAAUC,MAAiB,GACrH,OAAO,OAER,MAAO,MAGR1F,IAAGC,MAAM4J,mBAAqB,SAAUC,EAAStI,GAEhD,GAAIA,GAAOsI,EACV9J,GAAG2B,KAAKH,OACJ,IAAIA,EACRxB,GAAG0H,KAAKlG,GAKVxB,IAAGC,MAAM8J,SAAW,SAASzH,GAE5B,GAAIZ,GAAWY,EAAKf,WAAWA,UAC/BvB,IAAG4B,OAAOU,EAAKf,WACf,IAAIG,EAASG,YAAc,GAC1B7B,GAAG4B,OAAOF,EACX1B,IAAG2B,KAAK3B,GAAG,eACX,OAAO,OAERmE,QAAO6F,mBAAqB,SAASC,GAEpC,SAAWA,IAAO,UAAYA,IAAQ,KACrC,MAAO,MACRC,iBAAgBD,EAAI1I,WAAWA,WAAWA,WAAY,KACtD,IACC4I,GAASF,EAAI1I,WAAWA,WAAW6I,WACnCC,EAAS,qBACTC,EAASD,EAAOE,KAAKJ,EAAO5I,WAAWgB,IACvCiI,EAAIC,SAASH,EAAO,IACpBhJ,EAAImJ,SAASH,EAAO,GACrB,IAAIH,EAAO1J,QAAU,KAAOiK,QAAQ1K,GAAGiG,QAAQ,6BAC9C,MAAO,MAER,IAAIkE,EAAOlD,KAAK,cAAgBuD,EAAI,KAAOlJ,EAAG,KAC7C6I,EAAOlD,KAAK,cAAgBuD,EAAI,KAAOlJ,EAAG,KAAKb,MAAQ,GAExD0J,GAAO5I,WAAWA,WAAWyD,YAAYmF,EAAO5I,WAChD,OAAO,OAKR4C,QAAO+F,gBAAkB,SAASD,EAAKU,GAEtC,IAAKV,SAAcA,IAAO,SACzB,MAAO,MACR,IACCW,GAAMD,IAA8B,KAAOV,EAAI1I,WAAWA,WAAa0I,EACvEI,EAASO,EAAGC,UAAUpJ,gBAAkB,qBAAuB,aAC/D6I,EAASD,EAAOE,KAAKK,EAAGC,UAAUpJ,gBAAkBmJ,EAAGC,UAAUpJ,gBAAgBc,GAAK0H,EAAIjD,MAC1FwD,EAAIC,SAASH,EAAO,IACpBhJ,EAAImJ,SAASH,EAAO,GACrB,KAAKnG,OAAO,SAAWqG,GACtBrG,OAAO,SAAWqG,GAAKlJ,EAAI,CAC5B,IAAIqJ,IAA8B,KAClC,CACCrJ,EAAI6C,OAAO,SAAWqG,IACtB,IAAIL,GAASnK,GAAG2C,OAAO,OAAQmI,KAAS3G,OAAO,gBAAgB,mBAAmB6E,QAAQ,OAAQwB,GAAGxB,QAAQ,OAAQ1H,IACrHsJ,GAAG/G,aAAasG,EAAOC,WAAYQ,EAAGC,WAEvC,MAAO,OAKR1G,QAAO4G,qBAAuB,SAASC,GAEtC,SAAWA,IAAU,UAAYA,IAAW,KAC3C,MAAO,MACR,IACCC,GAAWD,EAAOzJ,WAAWE,gBAC7B+I,EAAIC,SAASQ,EAAS1I,GAAGyG,QAAQ,YAAa,IAC/C,IAAIiC,EAASxK,QAAU,KAAOiK,QAAQ1K,GAAGiG,QAAQ,+BAChD,MAAO,MACR,IAAIgF,EAAShE,KAAK,gBAAkBuD,EAAI,KACvCS,EAAShE,KAAK,gBAAkBuD,EAAI,KAAK/J,MAAQ,GAClDwK,GAAS1J,WAAWA,WAAWA,WAAWyD,YAAYiG,EAAS1J,WAAWA,WAC1E,OAAO,OAKR4C,QAAO+G,kBAAoB,SAAS5I,EAAM6I,GAEzC,IAAKhH,OAAO,SACXA,OAAO,SAAWsG,SAASU,GAAa,CACzCA,GAAYhH,OAAO,UAEnB,IAAI8G,GAAWjL,GAAG2C,OAAO,OAAQmI,KAAS3G,OAAO,gBAAgB,qBAAqB6E,QAAQ,OAAQmC,IACtG7I,GAAKf,WAAWsC,aAAaoH,EAASb,WAAY9H,EAClD,OAAO,OAGR6B,QAAOiH,eAAiB,SAASC,GAEhC,GAAIjE,GAAUjD,OAAO,gBAAkBA,OAAO,gBAAgBqE,IAAI,gBAAkB,MAAQ8C,EAAY,EACxG,MAAMlE,GAAUA,EAAOmE,QAAQC,SAASC,OACvC,MAAO,MAER,IAAIC,GAAQtE,EAAOkE,UAAUK,SAASvE,EAAOkE,UAAUM,aAAa3I,UACpE,IAAIyI,IAAUA,EAAMG,UACpB,CACC,GAAIC,GAAS9L,GAAG2C,OAAO,OAAQmI,KAAMY,EAAMK,UAC3C3E,GAAO4E,cACPV,GAAYlE,EAAO6E,KAAKC,iBAAiBJ,EACzC9L,IAAG4B,OAAOkK,GAEX,GAAIR,IAAc,GACjBtL,GAAGmM,gBACC,IAAId,EAAM,EACdC,EAAatL,GAAI,gBAAkBqL,EAAM,MAAQrL,GAAI,gBAAkBqL,EAAM,MAAMxJ,UAAY,OAC3F,IAAIwJ,EAAIpJ,OAAS,EACrBqJ,EAAYD,CAEbC,GAAYA,EAAUtC,QAAQ,2BAA4B,KAE1D,IAAIsC,IAAc,GAClB,CAEC,GAAIc,GAAW,SAASC,EAAKC,GAE5B,GAAInL,GAAS,IACZoL,EAAO,6GACPC,EAAMD,EAAKhC,KAAK+B,EACjB,IAAIE,EACHrL,EAAS,gBAAgBqL,EAAI,GAAG,WAAWA,EAAI,GAAG,IAAIA,EAAI,GAAG,UAC9D,IAAIrL,GAAU,IACd,CACC,GAAIsL,GAAO,mJACXD,GAAMC,EAAKlC,KAAK+B,EAChB,IAAIE,EACHrL,EAAS,gBAAgBqL,EAAI,GAAG,WAAWA,EAAI,GAAG,IAAIA,EAAI,GAAG,WAE/D,MAAOrL,GAGRmK,GAAYA,EAAUtC,QAAQ,kBAAmB,KAAQA,QAAQ,oBAAqB,IACtFsC,GAAYA,EAAUtC,QAAQ,uBAAwBoD,EACtDd,GAAYA,EAAUtC,QAAQ,oBAAqB,KAAQA,QAAQ,sBAAuB,IAC1FsC,GAAYA,EAAUtC,QAAQ,uBAAwB,IAGtDsC,GAAYA,EAAUtC,QAAQ,8HAA+H,IAC7JsC,GAAYA,EAAUtC,QAAQ,6HAA8H,IAC5JsC,GAAYA,EAAUtC,QAAQ,iDAAkD,IAChFsC,GAAYA,EAAUtC,QAAQ,2CAA4C,IAC1EsC,GAAYA,EAAUtC,QAAQ,6BAA8B,OAE5D,IAAII,GAAK,CACT,OAAMA,IAAO,KAAOkC,EAAUoB,OAAO,6BAA+B,GAAKpB,EAAUoB,OAAO,6BAA+B,GACzH,CACCpB,EAAYA,EAAUtC,QAAQ,2BAA4B,mBAAmBA,QAAQ,2BAA4B,qBAGlH,GAAI2D,GAAuB,SAASC,EAAG1E,EAAK2E,GAE3C,GAAIC,GAAW,GAAIC,QAAO,aAAsB7E,EAAI,aAAuB,IAC3E,IAAI8E,GAAa,GAAID,QAAO,qBAA8B7E,EAAI,qBAA+B,IAC7F,IAAI+E,GAAK,CACT,OAAOA,IAAO,KAASL,EAAEF,OAAOI,IAAa,EAC5CF,EAAIA,EAAE5D,QAAQgE,EAAY,KAAKH,EAAY,KAC5C,OAAOD,GAGRxD,GAAK,CACL,OAAMA,IAAO,IAAOkC,EAAUoB,OAAO,6BAA+B,EACpE,CACCpB,EAAYqB,EAAqBrB,EAAW,OAAQ,OACpDA,GAAYqB,EAAqBrB,EAAW,QAAU,QACtDA,GAAYqB,EAAqBrB,EAAW,OAAQ,OACpDA,GAAYqB,EAAqBrB,EAAW,QAAU,QACtDA,GAAYA,EAAUtC,QAAQ,2BAA4B,+BAG3DsC,EAAYA,EAAUtC,QAAQ,uBAAwB,GAGtD,IAAIhJ,GAAGkN,QAAQC,OACd7B,EAAYA,EAAUtC,QAAQ,2EAA4E,UAE1GsC,GAAYA,EAAUtC,QAAQ,8CAA+C,KAE9EsC,GAAYA,EAAUtC,QAAQ,qCAAsC,KAGpEsC,GAAYA,EAAUtC,QAAQ,8CAA+C,oBAC5EA,QAAQ,8CAA+C,oBACvDA,QAAQ,YAAa,KAAKA,QAAQ,SAAU,KAAKA,QAAQ,SAAU,KAAKA,QAAQ,WAAY,KAC5FA,QAAQ,oBAAqB,IAC7BA,QAAQ,UAAW,IACnBA,QAAQ,WAAY,IAErB,MAAM5B,KAAYkE,EAClB,CACC,GAAI8B,EACJ,IAAI/B,EAAM,EAAG,CACZ,GAAIrL,GAAI,iBAAmBqL,EAAM,OAASrL,GAAI,iBAAmBqL,EAAM,MAAMgC,aAAa,kBAAmB,CAC5GD,GACCpG,KAAOhH,GAAI,iBAAmBqL,EAAM,MAAMxE,aAAa,kBACvDtE,GAAKvC,GAAI,iBAAmBqL,EAAM,MAAMxE,aAAa,kBAKxD,GAAIO,EAAOkG,eAAiB,QAAUlG,EAAOmG,OAC7C,CACC,IAAKH,EACJA,EAAS,OACL,IAAIA,EAAO7K,GAAK,EACpB6K,EAAS,SAAWA,EAAO7K,GAAK,IAAM6K,EAAOpG,KAAO,cAEpDoG,GAASA,EAAOpG,IACjBoG,GAAUA,IAAW,GAAMA,EAASpN,GAAGiG,QAAQ,oBAAsB,KAAQ,EAC7EqF,GAAY8B,EAAS9B,MAEjB,IAAIlE,EAAOkG,eAAiB,UACjC,CACC,IAAKF,EACJA,EAAS,OACL,IAAIA,EAAO7K,GAAK,EACpB6K,EAAS,aAAehG,EAAOoG,SAAS,OAAQtF,IAAO,WAAYuF,QAAWhN,MAAU2M,EAAO7K,MAC9F,gEAAkE6K,EAAOpG,KAAKgC,QAAQ,MAAO,QAAQA,QAAQ,MAAO,QAAU,cAE/HoE,GAAS,SAAWA,EAAOpG,KAAKgC,QAAQ,MAAO,QAAQA,QAAQ,MAAO,QAAU,SACjFsC,IAAa8B,IAAW,GAAMA,EAASpN,GAAGiG,QAAQ,oBAAsB,OAAU,IAAMmB,EAAOsG,uBAAuBpC,GAGvHlE,EAAOuG,OAAOC,QAAQC,MAAMC,qBAAqBxC,EACjDlE,GAAOuG,OAAOI,KAAK,QAEnB,IAAI3G,EAAO4G,UACVhO,GAAGiO,KAAK7G,EAAO8G,gBAAiB,UAAWlO,GAAGmO,MAAM/G,EAAO4G,UAAUI,KAAMhH,EAAO4G,aAGrF,MAAO,OAKR7J,QAAOkK,aAAe,SAAShD,GAE9B,GAAI+B,GAAS,EACb,IAAI/B,EAAM,GAAKrL,GAAI,iBAAmBqL,EAAM,OAASrL,GAAI,iBAAmBqL,EAAM,MAAMgC,aAAa,kBAAmB,CACvHD,GACCpG,KAAOhH,GAAI,iBAAmBqL,EAAM,MAAMxE,aAAa,kBACvDtE,GAAKvC,GAAI,iBAAmBqL,EAAM,MAAMxE,aAAa,iBAGvD,GAAIO,GAAUjD,OAAO,gBAAkBA,OAAO,gBAAgBqE,IAAI,gBAAkB,KACpF,MAAMpB,KAAYgG,EAAQ,CACzB,GAAIhG,EAAOkG,eAAiB,QAAUlG,EAAOmG,OAC7C,CACCH,EAAUA,EAAO7K,GAAK,EAAI,SAAW6K,EAAO7K,GAAK,IAAM6K,EAAOpG,KAAO,UAAYoG,EAAOpG,IACxFI,GAAOkH,aAAaC,SAAS,GAAI,KAAMnB,OAEnC,IAAIhG,EAAOkG,eAAiB,UACjC,CACCF,EAAUA,EAAO7K,GAAK,EACpB,aAAe6E,EAAOoG,SAAS,OAAQtF,IAAO,WAAYuF,QAAWhN,MAAU2M,EAAO7K,MACtF,gEACA6K,EAAOpG,KAAKgC,QAAQ,MAAO,QAAQA,QAAQ,MAAO,QAAU,UACxD,SAAWoE,EAAOpG,KAAKgC,QAAQ,MAAO,QAAQA,QAAQ,MAAO,QAAU,SAC7E5B,GAAOoH,WAAWpB,EAAS,MAE5BhG,EAAOqH,OACPzO,IAAG0O,MAAMtH,EAAOqH,MAAOrH,KAExB,MAAO,OAERpH,IAAGC,MAAMmO,KAAO,SAASX,GAExB,IAAKA,SAAiBA,IAAU,SAC/B,MACD,IAAIzN,GAAGiG,QAAQ,gBAAkB,KACjC,CACCjG,GAAG2O,eAAexK,OAAQ,uBAAwB,SAASiD,GAE1DA,EAAOwH,WACNrM,GAAK,WACLyE,KAAO,WACP6H,cAAgB,2BAChBC,oBAAsB,MACtBC,YAAc,IACdzH,QAAU,WAET,GAAI3G,GAAW,SAASqO,GAEtB,SAAW5H,GAAO6H,aAAe,YAChC7H,EAAO6H,YAAc,KAEtB,IAAIC,MAAclN,EAAI,CAEtB,SAASmN,GAAS9C,EAAKC,EAAI8C,EAAQxC,GAElCsC,EAAQ7F,KAAKiD,EACb,OAAO,IAGR,QAAS+C,GAAQhD,EAAKC,EAAI8C,EAAQxC,GAEjC,MAAOsC,GAAQI,QAIhB,GAAIC,GAAI,GAAIxC,QAAO,kBAAmB,KACtCiC,GAAWA,EAAShG,QAAQuG,EAAGJ,EAE/B,IAAK/H,EAAO6H,aAAe,MAC3B,CACC,IAAKjN,EAAE,EAAGA,EAAEwN,mBAAmBvN,OAAQD,IAAKgN,EAAWA,EAAShG,QAAQwG,mBAAmBxN,GAAIyN,gBAAgBzN,GAC/G,KAAKA,EAAE,EAAGA,EAAE0N,mBAAmBzN,OAAQD,IAAKgN,EAAWA,EAAShG,QAAQ0G,mBAAmB1N,GAAI2N,gBAAgB3N,GAC/GoF,GAAO6H,YAAc,SAGtB,CACC,IAAKjN,EAAE,EAAGA,EAAEyN,gBAAgBxN,OAAQD,IAAKgN,EAAWA,EAAShG,QAAQ4G,mBAAmB5N,GAAI6N,gBAAgB7N,GAC5G,KAAKA,EAAE,EAAGA,EAAE2N,gBAAgB1N,OAAQD,IAAKgN,EAAWA,EAAShG,QAAQ8G,mBAAmB9N,GAAI+N,gBAAgB/N,GAC5GoF,GAAO6H,YAAc,MAGtBD,EAAWA,EAAShG,QAAQ,GAAI+D,QAAO,IAAQ,KAAMsC,EAErD,OAAOL,GAGT5H,GAAOqB,aACP,IAAIuH,GAAUrP,EAASyG,EAAOwB,aAC9B5I,IAAG0O,MAAM,WAERtH,EAAO6I,WAAWD,YAMvBhQ,GAAG2O,eAAexK,OAAQ,sBAAuB,SAASiD,GAEzDA,EAAO8I,uBAAyB,IAChClQ,IAAGiO,KAAKjO,GAAG,uBAAwB,QAAS,WAAYoH,EAAOqH,SAC/D,IAAI0B,GAAS1C,EAAO,UACnBxG,EAAOhE,SAASmN,MAAMD,EACvBnQ,IAAGiO,KAAKhH,EAAM,SAAU,SAASoJ,GAChC,IAAKrQ,GAAGC,MAAMqI,aAAarB,EAAMwG,EAAO,aACvCzN,GAAGsQ,eAAeD,IAEpBrQ,IAAG2O,eAAevH,EAAQ,cAAe,SAASiJ,GACjD,GAAIrQ,GAAGC,MAAMqI,aAAarB,EAAMwG,EAAO,aACtCzN,GAAG4J,OAAO3C,IAEZ,IAAIwG,EAAO,YAAc,IACzB,CACC,GAAI8C,GAAW,GAAIC,GAAQvJ,EAC3BjH,IAAG2O,eAAevH,EAAQ,mBAAoBpH,GAAGmO,MAAMoC,EAASE,KAAMF,GACtEvQ,IAAG0Q,MAAM,WACR1Q,GAAGiO,KAAKjO,GAAG,yBAA0B,QAASA,GAAGmO,MAAMoC,EAASI,OAAQJ,KAEzE,IAAI9C,EAAO,kBAAoB,IAC9B8C,EAASE,UAOb,IAAID,GAAU,SAASvJ,GAEtB,GAAIA,GAAQ,KACX,MAAO,MACR2J,MAAKpP,IAAMxB,GAAGgD,UAAUiE,GAAO/D,UAAY,6BAA8B,KACzE0N,MAAKC,MAAQ7Q,GAAGgD,UAAUiE,GAAOF,MAAOC,KAAO,iBAAkB,KACjE4J,MAAKE,OAAS9Q,GAAGgD,UAAUiE,GAAOF,MAAQC,KAAQ,iBAAkB,KACpE4J,MAAKG,MAAQ/Q,GAAGgD,UAAU4N,KAAKpP,KAAM0G,IAAM,OAAQ,KACnD,OAAO0I,MAERJ,GAAQQ,WACPP,KAAO,SAAShO,EAAMwO,GAErB,GAAIxO,IAAS,IAAMwO,IAAW,GAC9B,CACC,QAASC,GAAc/L,GAEtB,GAAIgM,GAAIhM,EAAGiM,MAAMC,SAAWrR,GAAGoR,MAAMjM,EAAI,UACzC,OAAQgM,IAAK,OAGd,IAAMD,EAAcN,KAAKpP,KACzB,CACCxB,GAAG2B,KAAKiP,KAAKpP,IACboP,MAAKD,YAIRW,eAAiB,SAASC,GAEzBX,KAAKC,MAAMpQ,MAAQ,EACnBmQ,MAAKE,OAAOrQ,MAAQ8Q,EAAK,cACzBX,MAAKG,MAAM3I,IAAM,0CAA0CmJ,EAAK,gBAEjEZ,OAAS,WAER3Q,GAAGqF,KAAK8C,WAAWnI,GAAGmO,MAAMyC,KAAKU,eAAgBV"}