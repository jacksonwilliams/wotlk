var e=Object.defineProperty,t=(t,l,a)=>(((t,l,a)=>{l in t?e(t,l,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[l]=a})(t,"symbol"!=typeof l?l+"":l,a),a);import{eE as l,A as a,eF as s,eG as n,T as i,eH as o,S as p,bV as d,N as c,H as r,b as m,eI as I,dR as h,F as g,dN as S,dI as u,dL as v,dM as f,dS as T,ec as y,a1 as A,ac as O,G as P,a2 as M,V as R,bf as w,a_ as b,aA as G,bb as C,x as k,E,aB as L,dv as H,L as W,dA as U,g as N,u as V,aQ as x}from"./detailed_results-f5af08fb.chunk.js";import{t as D,a1 as B,a as F,m as j,G as J,H as _,J as z,b as K,K as $,c as q,a2 as Q,a3 as X,r as Y,a4 as Z,a5 as ee,j as te,l as le,k as ae,T as se,s as ne,I as ie}from"./preset_utils-8c990753.chunk.js";import{P as oe}from"./suggest_gems_action-fb7d04c1.chunk.js";import{s as pe}from"./apl_utils-6c7a041b.chunk.js";const de=D({fieldName:"ammo",numColumns:2,values:[{value:l.AmmoNone,tooltip:"No Ammo"},{actionId:a.fromItemId(52021),value:l.IcebladeArrow},{actionId:a.fromItemId(41165),value:l.SaroniteRazorheads},{actionId:a.fromItemId(41586),value:l.TerrorshaftArrow},{actionId:a.fromItemId(31737),value:l.TimelessArrow},{actionId:a.fromItemId(34581),value:l.MysteriousArrow},{actionId:a.fromItemId(33803),value:l.AdamantiteStinger},{actionId:a.fromItemId(28056),value:l.BlackflightArrow}]}),ce=B(),re=F({fieldName:"petUptime",label:"Pet Uptime (%)",labelTooltip:"Percent of the fight duration for which your pet will be alive.",percent:!0}),me=j({fieldName:"useHuntersMark",id:a.fromSpellId(53338)}),Ie=F({fieldName:"sniperTrainingUptime",label:"ST Uptime (%)",labelTooltip:"Uptime for the Sniper Training talent, as a percent of the fight duration.",percent:!0,showWhen:e=>e.getTalents().sniperTraining>0,changeEmitter:e=>i.onAny([e.specOptionsChangeEmitter,e.talentsChangeEmitter])}),he=F({fieldName:"timeToTrapWeaveMs",label:"Weave Time",labelTooltip:"Amount of time for Explosive Trap, in milliseconds, between when you start moving towards the boss and when you re-engage your ranged autos."}),ge={inputs:[J({fieldName:"type",label:"Type",values:[{name:"Single Target",value:s.SingleTarget},{name:"AOE",value:s.Aoe}]}),J({fieldName:"sting",label:"Sting",labelTooltip:"Maintains the selected Sting on the primary target.",values:[{name:"None",value:n.NoSting},{name:"Scorpid Sting",value:n.ScorpidSting},{name:"Serpent Sting",value:n.SerpentSting}],showWhen:e=>e.getSimpleRotation().type==s.SingleTarget}),_({fieldName:"trapWeave",label:"Trap Weave",labelTooltip:"Uses Explosive Trap at appropriate times. Note that selecting this will disable Black Arrow because they share a CD."}),_({fieldName:"allowExplosiveShotDownrank",label:"Allow ES Downrank",labelTooltip:"Weaves Explosive Shot Rank 3 during LNL procs. This works because the rank 3 and rank 4 dots can stack.",showWhen:e=>e.getSimpleRotation().type!=s.Custom&&e.getTalents().explosiveShot&&e.getTalents().lockAndLoad>0,changeEmitter:e=>i.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),_({fieldName:"multiDotSerpentSting",label:"Multi-Dot Serpent Sting",labelTooltip:"Casts Serpent Sting on multiple targets",changeEmitter:e=>i.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),z({fieldName:"viperStartManaPercent",label:"Viper Start Mana %",labelTooltip:"Switch to Aspect of the Viper when mana goes below this amount.",percent:!0}),z({fieldName:"viperStopManaPercent",label:"Viper Stop Mana %",labelTooltip:"Switch back to Aspect of the Hawk when mana goes above this amount.",percent:!0})]},Se={items:[{id:40543,enchant:3817,gems:[41398,42143]},{id:44664,gems:[42143]},{id:40507,enchant:3808,gems:[39997]},{id:40403,enchant:3605},{id:43998,enchant:3832,gems:[42143,39997]},{id:40282,enchant:3845,gems:[39997,0]},{id:40541,enchant:3604,gems:[0]},{id:40275,enchant:3601,gems:[39997]},{id:40506,enchant:3823,gems:[39997,49110]},{id:40549,enchant:3606},{id:40074},{id:40474},{id:40684},{id:44253},{id:40388,enchant:3827},{},{id:40385,enchant:3608}]},ue={items:[{id:45610,enchant:3817,gems:[41398,42702]},{id:45517,gems:[42143]},{id:45300,enchant:3808,gems:[40043]},{id:46032,enchant:3605,gems:[42143,40043]},{id:45473,enchant:3832,gems:[39997,39997,39997]},{id:45869,enchant:3845,gems:[40044,0]},{id:45444,enchant:3604,gems:[42143,39997,0]},{id:45467,enchant:3601,gems:[39997]},{id:45536,enchant:3823,gems:[39997,39997,39997]},{id:45244,enchant:3606,gems:[39997,39997]},{id:45608,gems:[39997]},{id:46322,gems:[39997]},{id:45931},{id:46038},{id:45613,enchant:3827,gems:[45879,39997]},{},{id:45570,enchant:3608}]},ve={items:[{id:48262,enchant:3817,gems:[41398,40147]},{id:47060,gems:[42143]},{id:48260,enchant:3808,gems:[40112]},{id:47545,enchant:3605,gems:[40112]},{id:46965,enchant:3832,gems:[40112,40112,40112]},{id:47074,enchant:3845,gems:[40147,0]},{id:48263,enchant:3604,gems:[40148,0]},{id:47153,gems:[40148,42143,42143]},{id:48261,enchant:3823,gems:[49110,40112]},{id:47109,enchant:3606,gems:[40147,40147]},{id:47075,gems:[40112]},{id:45608,gems:[40112]},{id:47131},{id:45931},{id:47239,enchant:3827,gems:[40147,40112]},{},{id:47521,enchant:3608,gems:[40147]}]},fe={items:[{id:51286,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51288,enchant:3808,gems:[40117]},{id:47546,enchant:3605,gems:[42153]},{id:51289,enchant:3832,gems:[40117,40117]},{id:50655,enchant:3845,gems:[40117,0]},{id:51285,enchant:3604,gems:[40117,0]},{id:50688,enchant:3601,gems:[40148,42153,42153]},{id:50645,enchant:3823,gems:[49110,40117,40147]},{id:50607,enchant:3606,gems:[40148,40148]},{id:50618,gems:[40117]},{id:50402,gems:[40148]},{id:50363},{id:47131},{id:50735,enchant:3827,gems:[40117,40117,40117]},{},{id:50733,enchant:3608,gems:[40117]}]},Te={items:[{id:51286,enchant:3817,gems:[41398,40117]},{id:50633,gems:[40117]},{id:51288,enchant:3808,gems:[40117]},{id:47546,enchant:3605,gems:[42153]},{id:51289,enchant:3832,gems:[40112,40112]},{id:54580,enchant:3845,gems:[40117,0]},{id:51285,enchant:3604,gems:[40117,0]},{id:50688,enchant:3601,gems:[40148,42153,42153]},{id:50645,enchant:3823,gems:[49110,40112,40147]},{id:54577,enchant:3606,gems:[40148,40148]},{id:50618,gems:[40117]},{id:54576,gems:[40148]},{id:50363},{id:54590},{id:50735,enchant:3247,gems:[40112,40112,40112]},{},{id:50733,enchant:3608,gems:[40117]}]},ye={items:[{id:42551,enchant:3817,gems:[41398,42143]},{id:40678},{id:37373,enchant:3808},{id:43406,enchant:3605},{id:39579,enchant:3832,gems:[39997,49110]},{id:37170,enchant:3845,gems:[0]},{id:39582,enchant:3604,gems:[39997,0]},{id:37407,enchant:3601,gems:[42143]},{id:37669,enchant:3823},{id:37167,enchant:3606,gems:[42143,39997]},{id:37685},{id:42642,gems:[39997]},{id:40684},{id:44253},{id:44249,enchant:3827},{},{id:37191,enchant:3608}]},Ae={items:[{id:40505,enchant:3817,gems:[41398,42143]},{id:44664,gems:[42143]},{id:40507,enchant:3808,gems:[39997]},{id:40403,enchant:3605},{id:43998,enchant:3832,gems:[42143,39997]},{id:40282,enchant:3845,gems:[39997,0]},{id:40541,enchant:3604,gems:[0]},{id:39762,enchant:3601,gems:[39997]},{id:40331,enchant:3823,gems:[39997,49110]},{id:40549,enchant:3606},{id:40074},{id:40474},{id:40684},{id:44253},{id:40388,enchant:3827},{},{id:40385,enchant:3608}]},Oe={items:[{id:45610,enchant:3817,gems:[41398,40023]},{id:45517,gems:[39997]},{id:45300,enchant:3808,gems:[39997]},{id:46032,enchant:3605,gems:[39997,40044]},{id:45473,enchant:3832,gems:[39997,39997,45879]},{id:45869,enchant:3845,gems:[40043,0]},{id:45444,enchant:3604,gems:[39997,40023,0]},{id:46095,gems:[42143,42143,42143]},{id:45536,enchant:3823,gems:[39997,39997,39997]},{id:45244,enchant:3606,gems:[39997,40023]},{id:45608,gems:[39997]},{id:46322,gems:[39997]},{id:44253},{id:45931},{id:45613,enchant:3827,gems:[39997,39997]},{},{id:45570,enchant:3608}]},Pe={items:[{id:48262,enchant:3817,gems:[41398,40147]},{id:47060,gems:[42143]},{id:48260,enchant:3808,gems:[40112]},{id:47545,enchant:3605,gems:[40112]},{id:48264,enchant:3832,gems:[40112,40147]},{id:47074,enchant:3845,gems:[40148,0]},{id:48263,enchant:3604,gems:[40148,0]},{id:47153,gems:[40147,42143,42143]},{id:47191,enchant:3823,gems:[49110,40147,40112]},{id:47109,enchant:3606,gems:[40112,40112]},{id:47075,gems:[40112]},{id:45608,gems:[40112]},{id:47131},{id:44253},{id:47239,enchant:3827,gems:[40147,40112]},{},{id:47521,enchant:3608,gems:[40112]}]},Me={items:[{id:51286,enchant:3817,gems:[41398,40112]},{id:50633,gems:[40112]},{id:51288,enchant:3808,gems:[40112]},{id:47546,enchant:3605,gems:[42143]},{id:51289,enchant:3832,gems:[40112,40112]},{id:50655,enchant:3845,gems:[40112,0]},{id:51285,enchant:3604,gems:[40112,0]},{id:50688,enchant:3601,gems:[40148,42143,42143]},{id:50645,enchant:3823,gems:[49110,40112,40150]},{id:50607,enchant:3606,gems:[40148,40148]},{id:50618,gems:[45879]},{id:50402,gems:[40148]},{id:50363},{id:47131},{id:50735,enchant:3827,gems:[40112,40112,40112]},{},{id:50733,enchant:3608,gems:[40112]}]},Re={items:[{id:51286,enchant:3817,gems:[41398,40112]},{id:50633,gems:[40112]},{id:51288,enchant:3808,gems:[40112]},{id:47546,enchant:3605,gems:[42143]},{id:51289,enchant:3832,gems:[40112,40112]},{id:50655,enchant:3845,gems:[40112,0]},{id:51285,enchant:3604,gems:[40112,0]},{id:50688,enchant:3601,gems:[40148,42143,42143]},{id:50645,enchant:3823,gems:[49110,40112,40150]},{id:54577,enchant:3606,gems:[40148,40148]},{id:50618,gems:[45879]},{id:54576,gems:[40148]},{id:50363},{id:54590},{id:50735,enchant:3827,gems:[40112,40112,40112]},{},{id:50733,enchant:3608,gems:[40112]}]},we={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:34074}}}}},{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}}]}},castSpell:{spellId:{spellId:34074}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:61847}}}}},{cmp:{op:"OpGt",lhs:{currentManaPercent:{}},rhs:{const:{val:"30%"}}}}]}},castSpell:{spellId:{spellId:61847}}}},{action:{castSpell:{spellId:{spellId:61006}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:49067}}}}},castSpell:{spellId:{tag:1,spellId:49067}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:49001}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:49001}}}},{action:{castSpell:{spellId:{spellId:49050}}}},{action:{castSpell:{spellId:{spellId:49048}}}},{hide:!0,action:{castSpell:{spellId:{spellId:49045}}}},{action:{castSpell:{spellId:{spellId:49052}}}}]},be={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:34074}}}}},{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}}]}},castSpell:{spellId:{spellId:34074}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:61847}}}}},{cmp:{op:"OpGt",lhs:{currentManaPercent:{}},rhs:{const:{val:"30%"}}}}]}},castSpell:{spellId:{spellId:61847}}}},{action:{castSpell:{spellId:{spellId:34490}}}},{action:{castSpell:{spellId:{spellId:61006}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:49001}}}}},castSpell:{spellId:{spellId:49001}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:49067}}}}},castSpell:{spellId:{tag:1,spellId:49067}}}},{action:{castSpell:{spellId:{spellId:53209}}}},{action:{castSpell:{spellId:{spellId:49050}}}},{action:{castSpell:{spellId:{spellId:49048}}}},{hide:!0,action:{castSpell:{spellId:{spellId:49045}}}},{action:{castSpell:{spellId:{spellId:49052}}}}]},Ge={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:61847}}},doAtValue:{const:{val:"-25s"}}},{action:{castSpell:{spellId:{spellId:49067}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{spellId:53517}}},doAtValue:{const:{val:"-3s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.401s"}}},{action:{castSpell:{spellId:{spellId:49052}}},doAtValue:{const:{val:"-1.4s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"1.35s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"1s"}}}},castSpell:{spellId:{itemId:42641}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"61s"}}}},castSpell:{spellId:{itemId:41119}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},castSpell:{spellId:{spellId:34026}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"1.35s"}}}},castSpell:{spellId:{spellId:34490}}}},{action:{condition:{cmp:{op:"OpEq",lhs:{currentTime:{}},rhs:{const:{val:"0s"}}}},castSpell:{spellId:{itemId:41119}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:53209}}},rhs:{const:{val:"6s"}}}},{or:{vals:[{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:49050}}},rhs:{const:{val:"6s"}}}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:49048}}},rhs:{const:{val:"6s"}}}}]}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:3045}}},rhs:{const:{val:"167s"}}}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:34490}}},rhs:{const:{val:"13s"}}}},{cmp:{op:"OpGt",lhs:{spellTimeToReady:{spellId:{spellId:49067}}},rhs:{const:{val:"23s"}}}}]}},castSpell:{spellId:{spellId:23989}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{currentManaPercent:{}},rhs:{const:{val:"15%"}}}},{not:{val:{auraIsActive:{auraId:{spellId:61847}}}}}]}},castSpell:{spellId:{spellId:61847}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}},{not:{val:{auraIsActive:{auraId:{spellId:34074}}}}}]}},castSpell:{spellId:{spellId:34074}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"40%"}}}},castSpell:{spellId:{itemId:20520}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:61006}}},rhs:{const:{val:"0.21s"}}}},castSpell:{spellId:{spellId:61006}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:49001}}}}},castSpell:{spellId:{spellId:49001}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:49067}}}}},castSpell:{spellId:{spellId:49067}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:53209}}},rhs:{const:{val:"0.15s"}}}},{spellCanCast:{spellId:{spellId:53209}}}]}},castSpell:{spellId:{spellId:53209}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:49050}}},rhs:{const:{val:"0.15s"}}}},{spellCanCast:{spellId:{spellId:49050}}}]}},castSpell:{spellId:{spellId:49050}}}},{action:{castSpell:{spellId:{spellId:49052}}}},{hide:!0,action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:49045}}},rhs:{const:{val:"0.2s"}}}},{spellCanCast:{spellId:{spellId:49045}}}]}},castSpell:{spellId:{spellId:49045}}}}]},Ce={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:34074}}}}},{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}}]}},castSpell:{spellId:{spellId:34074}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:61847}}}}},{cmp:{op:"OpGt",lhs:{currentManaPercent:{}},rhs:{const:{val:"30%"}}}}]}},castSpell:{spellId:{spellId:61847}}}},{action:{castSpell:{spellId:{spellId:61006}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:60053}}}}},castSpell:{spellId:{spellId:60053}}}},{action:{condition:{dotIsActive:{spellId:{spellId:60053}}},castSpell:{spellId:{spellId:60052}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:49067}}}}},castSpell:{spellId:{tag:1,spellId:49067}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:49001}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:49001}}}},{action:{castSpell:{spellId:{spellId:63672}}}},{action:{castSpell:{spellId:{spellId:49050}}}},{action:{castSpell:{spellId:{spellId:49048}}}},{action:{castSpell:{spellId:{spellId:49052}}}}]},ke={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:49067}}},doAtValue:{const:{val:"-24s"}}},{action:{castSpell:{spellId:{spellId:61847}}},doAtValue:{const:{val:"-20s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1.4s"}}},{action:{castSpell:{spellId:{spellId:49052}}},doAtValue:{const:{val:"-1.4s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"1s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"20%"}}}},castSpell:{spellId:{itemId:20520}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:61847}}}}},{cmp:{op:"OpGt",lhs:{currentManaPercent:{}},rhs:{const:{val:"15%"}}}}]}},castSpell:{spellId:{spellId:61847}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:34074}}}}},{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"5%"}}}}]}},castSpell:{spellId:{spellId:34074}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:61006}}},rhs:{const:{val:"250ms"}}}}]}},waitUntil:{condition:{spellIsReady:{spellId:{spellId:61006}}}}}},{action:{condition:{spellIsReady:{spellId:{spellId:61006}}},castSpell:{spellId:{spellId:61006}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:60053}}},rhs:{const:{val:"500ms"}}}}]}},waitUntil:{condition:{spellIsReady:{spellId:{spellId:60053}}}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:60053}}}}},castSpell:{spellId:{spellId:60053}}}},{action:{condition:{dotIsActive:{spellId:{spellId:60053}}},castSpell:{spellId:{spellId:60052}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:49067}}}}},castSpell:{spellId:{spellId:49067,tag:1}}}},{action:{condition:{spellIsReady:{spellId:{spellId:63672}}},castSpell:{spellId:{spellId:63672}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:49001}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"6s"}}}}]}},castSpell:{spellId:{spellId:49001}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:49050}}},rhs:{const:{val:"250ms"}}}}]}},waitUntil:{condition:{spellIsReady:{spellId:{spellId:49050}}}}}},{action:{condition:{spellIsReady:{spellId:{spellId:49050}}},castSpell:{spellId:{spellId:49050}}}},{action:{condition:{or:{vals:[{cmp:{op:"OpLt",lhs:{spellTimeToReady:{spellId:{spellId:49048}}},rhs:{const:{val:"200ms"}}}}]}},waitUntil:{condition:{spellIsReady:{spellId:{spellId:49048}}}}}},{action:{condition:{spellIsReady:{spellId:{spellId:49048}}},castSpell:{spellId:{spellId:49048}}}},{action:{castSpell:{spellId:{spellId:49052}}}}]},Ee={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{condition:{cmp:{op:"OpGt",lhs:{currentTime:{}},rhs:{const:{val:"10s"}}}},autocastOtherCooldowns:{}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:34074}}}}},{cmp:{op:"OpLt",lhs:{currentManaPercent:{}},rhs:{const:{val:"10%"}}}}]}},castSpell:{spellId:{spellId:34074}}}},{action:{condition:{and:{vals:[{not:{val:{auraIsActive:{auraId:{spellId:61847}}}}},{cmp:{op:"OpGt",lhs:{currentManaPercent:{}},rhs:{const:{val:"30%"}}}}]}},castSpell:{spellId:{spellId:61847}}}},{hide:!0,action:{multidot:{spellId:{spellId:49001},maxDots:3,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:49067}}}}},castSpell:{spellId:{tag:1,spellId:49067}}}},{action:{castSpell:{spellId:{spellId:58434}}}}]},Le=K("MM PreRaid Preset",{items:[{id:42551,enchant:3817,gems:[41398,42143]},{id:40678},{id:37373,enchant:3808},{id:43566,enchant:3605},{id:39579,enchant:3832,gems:[39997,49110]},{id:37170,enchant:3845,gems:[0]},{id:39582,enchant:3604,gems:[40014,0]},{id:37407,enchant:3601,gems:[42143]},{id:37669,enchant:3823},{id:37167,enchant:3606,gems:[42143,39997]},{id:37685},{id:42642,gems:[40044]},{id:40684},{id:44253},{id:44249,enchant:3827},{},{id:37191,enchant:3608}]},{talentTrees:[0,1]}),He=K("MM P1 Preset",Se,{talentTrees:[0,1]}),We=K("MM P2 Preset",ue,{talentTrees:[0,1]}),Ue=K("MM P3 Preset",ve,{talentTrees:[0,1]}),Ne=K("MM P4 Preset",fe,{talentTrees:[0,1]}),Ve=K("MM P5 Preset",Te,{talentTrees:[0,1]}),xe=K("SV PreRaid Preset",ye,{talentTree:2}),De=K("SV P1 Preset",Ae,{talentTree:2}),Be=K("SV P2 Preset",Oe,{talentTree:2}),Fe=K("SV P3 Preset",Pe,{talentTree:2}),je=K("SV P4 Preset",Me,{talentTree:2}),Je=K("SV P5 Preset",Re,{talentTree:2}),_e=o.create({type:s.SingleTarget,sting:n.SerpentSting,trapWeave:!0,viperStartManaPercent:.1,viperStopManaPercent:.3,multiDotSerpentSting:!0,allowExplosiveShotDownrank:!0}),ze=$("Simple Default",p.SpecHunter,_e),Ke=q("BM",we,{talentTree:0}),$e=q("MM",be,{talentTree:1}),qe=q("MM (Advanced)",Ge,{talentTree:1}),Qe=q("SV",Ce,{talentTree:2}),Xe=q("SV (Advanced)",ke,{talentTree:2}),Ye=q("AOE",Ee),Ze={name:"Beast Mastery",data:d.create({talentsString:"51200201505112243120531251-025305101",glyphs:c.create({major1:r.GlyphOfBestialWrath,major2:r.GlyphOfSteadyShot,major3:r.GlyphOfSerpentSting,minor1:m.GlyphOfFeignDeath,minor2:m.GlyphOfRevivePet,minor3:m.GlyphOfMendPet})})},et={name:"Marksman",data:d.create({talentsString:"502-025335101030013233135031051-5000032",glyphs:c.create({major1:r.GlyphOfSerpentSting,major2:r.GlyphOfSteadyShot,major3:r.GlyphOfExplosiveTrap,minor1:m.GlyphOfFeignDeath,minor2:m.GlyphOfRevivePet,minor3:m.GlyphOfMendPet})})},tt={name:"Survival",data:d.create({talentsString:"-005305101-5000032500033330531135301331",glyphs:c.create({major1:r.GlyphOfSerpentSting,major2:r.GlyphOfExplosiveTrap,major3:r.GlyphOfKillShot,minor1:m.GlyphOfFeignDeath,minor2:m.GlyphOfRevivePet,minor3:m.GlyphOfMendPet})})},lt=I.create({ammo:l.SaroniteRazorheads,useHuntersMark:!0,petType:h.Wolf,petTalents:Q,petUptime:1,sniperTrainingUptime:.9,timeToTrapWeaveMs:2e3}),at=I.create({ammo:l.SaroniteRazorheads,useHuntersMark:!0,petType:h.Wolf,petTalents:X,petUptime:1,sniperTrainingUptime:.9,timeToTrapWeaveMs:2e3}),st=g.create({defaultPotion:S.PotionOfSpeed,flask:u.FlaskOfEndlessRage,food:v.FoodFishFeast,petFood:f.PetFoodSpicedMammothTreats}),nt=Y(p.SpecHunter,{cssClass:"hunter-sim-ui",cssScheme:"hunter",knownIssues:[],warnings:[e=>({updateOn:i.onAny([e.player.talentsChangeEmitter,e.player.specOptionsChangeEmitter]),getContent:()=>{const t=[h.Chimaera,h.CoreHound,h.Devilsaur,h.Silithid,h.SpiritBeast,h.Worm].includes(e.player.getSpecOptions().petType),l=e.player.getTalents().beastMastery;return t&&!l?"Cannot use exotic pets without the Beast Mastery talent.":""}}),e=>({updateOn:i.onAny([e.player.talentsChangeEmitter,e.player.specOptionsChangeEmitter]),getContent:()=>{const t=e.player.getSpecOptions(),l=t.petTalents||T.create(),a=Z(l,ee(t.petType)),s=y(a),n=e.player.getTalents().beastMastery?20:16;return 0==s?"":s<n?"Unspent pet talent points.":s>n?"More than 16 points spent in pet talents, but Beast Mastery is not talented.":""}})],epStats:[A.StatStamina,A.StatIntellect,A.StatAgility,A.StatRangedAttackPower,A.StatMeleeHit,A.StatMeleeCrit,A.StatMeleeHaste,A.StatArmorPenetration,A.StatMP5],epPseudoStats:[O.PseudoStatRangedDps],epReferenceStat:A.StatRangedAttackPower,displayStats:[A.StatHealth,A.StatStamina,A.StatAgility,A.StatIntellect,A.StatRangedAttackPower,A.StatMeleeHit,A.StatMeleeCrit,A.StatMeleeHaste,A.StatArmorPenetration,A.StatMP5],modifyDisplayStats:e=>{let t=new P;t=t.addStat(A.StatMeleeCrit,1*e.getTalents().lethalShots*M);const l=e.getEquippedItem(R.ItemSlotRanged);return 3608==l?.enchant?.effectId&&(t=t.addStat(A.StatMeleeCrit,40)),e.getRace()==w.RaceDwarf&&l?.item.rangedWeaponType==b.RangedWeaponTypeGun&&(t=t.addStat(A.StatMeleeCrit,1*M)),e.getRace()==w.RaceTroll&&l?.item.rangedWeaponType==b.RangedWeaponTypeBow&&(t=t.addStat(A.StatMeleeCrit,1*M)),{talents:t}},defaults:{gear:De.gear,epWeights:P.fromMap({[A.StatStamina]:.5,[A.StatAgility]:2.65,[A.StatIntellect]:1.1,[A.StatRangedAttackPower]:1,[A.StatMeleeHit]:2,[A.StatMeleeCrit]:1.5,[A.StatMeleeHaste]:1.39,[A.StatArmorPenetration]:1.32},{[O.PseudoStatRangedDps]:6.32}),consumes:st,talents:tt.data,specOptions:lt,raidBuffs:G.create({arcaneBrilliance:!0,powerWordFortitude:C.TristateEffectImproved,giftOfTheWild:C.TristateEffectImproved,bloodlust:!0,strengthOfEarthTotem:C.TristateEffectImproved,windfuryTotem:C.TristateEffectImproved,battleShout:C.TristateEffectImproved,leaderOfThePack:C.TristateEffectImproved,sanctifiedRetribution:!0,unleashedRage:!0,moonkinAura:C.TristateEffectImproved}),partyBuffs:k.create({}),individualBuffs:E.create({blessingOfKings:!0,blessingOfWisdom:2,blessingOfMight:2,vampiricTouch:!0}),debuffs:L.create({sunderArmor:!0,faerieFire:C.TristateEffectImproved,judgementOfWisdom:!0,curseOfElements:!0,heartOfTheCrusader:!0,savageCombat:!0})},playerIconInputs:[ce,de,me],rotationInputs:ge,petConsumeInputs:[te],includeBuffDebuffInputs:[le,ae],excludeBuffDebuffInputs:[],otherInputs:{inputs:[re,he,Ie,se,ne]},encounterPicker:{showExecuteProportion:!1},presets:{talents:[Ze,et,tt],rotations:[ze,Ke,$e,qe,Qe,Xe,Ye],gear:[Le,He,We,Ue,Ne,Ve,xe,De,Be,Fe,je,Je]},autoRotation:e=>{const t=e.getTalentTree();return e.sim.encounter.targets.length>=4?Ye.rotation.rotation:0==t?Ke.rotation.rotation:1==t?$e.rotation.rotation:Qe.rotation.rotation},simpleRotation:(e,t,l)=>{let[a,i]=pe(l);const o=H.fromJsonString(`{"condition":{"cmp":{"op":"OpGt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"6s"}}}},"multidot":{"spellId":{"spellId":49001},"maxDots":${t.multiDotSerpentSting?3:1},"maxOverlap":{"const":{"val":"0ms"}}}}`),p=H.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":3043},"maxOverlap":{"const":{"val":"0ms"}}}},"castSpell":{"spellId":{"spellId":3043}}}'),d=H.fromJsonString('{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":49067}}}}},"castSpell":{"spellId":{"tag":1,"spellId":49067}}}'),c=H.fromJsonString('{"castSpell":{"spellId":{"spellId":58434}}}'),r=H.fromJsonString('{"castSpell":{"spellId":{"spellId":61006}}}'),m=H.fromJsonString('{"castSpell":{"spellId":{"spellId":49050}}}'),I=H.fromJsonString('{"castSpell":{"spellId":{"spellId":49048}}}'),h=H.fromJsonString('{"castSpell":{"spellId":{"spellId":49052}}}'),g=H.fromJsonString('{"castSpell":{"spellId":{"spellId":34490}}}'),S=H.fromJsonString('{"castSpell":{"spellId":{"spellId":53209}}}'),u=H.fromJsonString('{"castSpell":{"spellId":{"spellId":63672}}}'),v=H.fromJsonString('{"condition":{"not":{"val":{"dotIsActive":{"spellId":{"spellId":60053}}}}},"castSpell":{"spellId":{"spellId":60053}}}'),f=H.fromJsonString('{"condition":{"dotIsActive":{"spellId":{"spellId":60053}}},"castSpell":{"spellId":{"spellId":60052}}}');0!=t.viperStartManaPercent&&i.push(H.fromJsonString(`{"condition":{"and":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":34074}}}}},{"cmp":{"op":"OpLt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(100*t.viperStartManaPercent).toFixed(0)}%"}}}}]}},"castSpell":{"spellId":{"spellId":34074}}}`)),0!=t.viperStopManaPercent&&i.push(H.fromJsonString(`{"condition":{"and":{"vals":[{"not":{"val":{"auraIsActive":{"auraId":{"spellId":61847}}}}},{"cmp":{"op":"OpGt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(100*t.viperStopManaPercent).toFixed(0)}%"}}}}]}},"castSpell":{"spellId":{"spellId":61847}}}`));const T=e.getTalentTree();return t.type==s.Aoe?i.push(...[t.sting==n.ScorpidSting?p:null,t.sting==n.SerpentSting?o:null,t.trapWeave?d:null,c].filter((e=>e))):0==T?i.push(...[r,t.trapWeave?d:null,t.sting==n.ScorpidSting?p:null,t.sting==n.SerpentSting?o:null,m,I,h].filter((e=>e))):1==T?i.push(...[g,r,t.sting==n.ScorpidSting?p:null,t.sting==n.SerpentSting?o:null,t.trapWeave?d:null,S,m,I,h].filter((e=>e))):2==T&&i.push(...[r,v,t.allowExplosiveShotDownrank?f:null,t.trapWeave?d:null,t.sting==n.ScorpidSting?p:null,t.sting==n.SerpentSting?o:null,u,m,I,h].filter((e=>e))),W.create({prepullActions:a,priorityList:i.map((e=>U.create({action:e})))})},raidSimPresets:[{spec:p.SpecHunter,tooltip:"Beast Mastery Hunter",defaultName:"Beast Mastery",iconUrl:N(V.ClassHunter,0),talents:Ze.data,specOptions:at,consumes:st,defaultFactionRaces:{[x.Unknown]:w.RaceUnknown,[x.Alliance]:w.RaceNightElf,[x.Horde]:w.RaceOrc},defaultGear:{[x.Unknown]:{},[x.Alliance]:{1:He.gear,2:We.gear,3:Ue.gear,4:Ne.gear},[x.Horde]:{1:He.gear,2:We.gear,3:Ue.gear,4:Ne.gear}}},{spec:p.SpecHunter,tooltip:"Marksmanship Hunter",defaultName:"Marksmanship",iconUrl:N(V.ClassHunter,1),talents:et.data,specOptions:lt,consumes:st,defaultFactionRaces:{[x.Unknown]:w.RaceUnknown,[x.Alliance]:w.RaceNightElf,[x.Horde]:w.RaceOrc},defaultGear:{[x.Unknown]:{},[x.Alliance]:{1:He.gear,2:We.gear,3:Ue.gear,4:Ne.gear},[x.Horde]:{1:He.gear,2:We.gear,3:Ue.gear,4:Ne.gear}}},{spec:p.SpecHunter,tooltip:"Survival Hunter",defaultName:"Survival",iconUrl:N(V.ClassHunter,2),talents:tt.data,specOptions:lt,consumes:st,defaultFactionRaces:{[x.Unknown]:w.RaceUnknown,[x.Alliance]:w.RaceNightElf,[x.Horde]:w.RaceOrc},defaultGear:{[x.Unknown]:{},[x.Alliance]:{1:De.gear,2:Be.gear,3:Fe.gear,4:je.gear},[x.Horde]:{1:De.gear,2:Be.gear,3:Fe.gear,4:je.gear}}}]});class it extends ie{constructor(e,t){super(e,t,nt),new ot(this)}}class ot extends oe{constructor(e){super(e,!0,!1,!0,!1),t(this,"player"),t(this,"arpSlop",4),t(this,"hitSlop",11),this.player=e.player}detectArpStackConfiguration(e){return this.useArpGems=1===this.player.getTalentTree()&&this.arpTarget>1e3&&this.passiveArp>648,super.detectArpStackConfiguration(e)}}export{it as H};
//# sourceMappingURL=sim-69619140.chunk.js.map
