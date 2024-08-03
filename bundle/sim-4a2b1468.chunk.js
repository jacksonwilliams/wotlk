import{eJ as e,A as t,eK as a,T as n,aQ as s,eL as i,S as l,bV as d,N as o,M as c,c as r,eM as m,aD as p,F as g,dI as h,dL as I,dN as u,dG as S,$ as f,a1 as A,G as v,b1 as T,aA as P,bb as y,x as F,E as O,aB as b,dz as M,dv as w,L as B,dA as C,g as W,u as G,bf as E}from"./detailed_results-f5af08fb.chunk.js";import{t as L,a as k,G as R,H,J as j,b as J,K as N,c as V,r as U,R as x,D,T as _,n as $,I as z}from"./preset_utils-8c990753.chunk.js";import{s as K}from"./apl_utils-6c7a041b.chunk.js";const q=L({fieldName:"armor",values:[{value:e.NoArmor,tooltip:"No Armor"},{actionId:t.fromSpellId(43024),value:e.MageArmor},{actionId:t.fromSpellId(43046),value:e.MoltenArmor}]}),Q=k({fieldName:"waterElementalDisobeyChance",percent:!0,label:"Water Ele Disobey %",labelTooltip:"Percent of Water Elemental actions which will fail. This represents the Water Elemental moving around or standing still instead of casting.",changeEmitter:e=>n.onAny([e.specOptionsChangeEmitter,e.talentsChangeEmitter]),showWhen:e=>e.getTalents().summonWaterElemental}),X=k({fieldName:"focusMagicPercentUptime",label:"Focus Magic Percent Uptime",labelTooltip:"Percent of uptime for Focus Magic Buddy",extraCssClasses:["within-raid-sim-hide"]}),Y={inputs:[R({fieldName:"primaryFireSpell",label:"Primary Spell",values:[{name:"Fireball",value:a.Fireball},{name:"Frostfire Bolt",value:a.FrostfireBolt},{name:"Scorch",value:a.Scorch}],showWhen:e=>1==e.getTalentTree(),changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),H({fieldName:"useIceLance",label:"Use Ice Lance",labelTooltip:"Casts Ice Lance at the end of Fingers of Frost, after using Deep Freeze.",showWhen:e=>2==e.getTalentTree(),changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),j({fieldName:"only3ArcaneBlastStacksBelowManaPercent",percent:!0,label:"Stack Arcane Blast to 3 below mana %",labelTooltip:"When below this mana %, AM/ABarr will be used at 3 stacks of AB instead of 4.",showWhen:e=>0==e.getTalentTree(),changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),j({fieldName:"blastWithoutMissileBarrageAboveManaPercent",percent:!0,label:"AB without Missile Barrage above mana %",labelTooltip:"When above this mana %, spam AB until a Missile Barrage proc occurs.",showWhen:e=>0==e.getTalentTree(),changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),j({fieldName:"missileBarrageBelowManaPercent",percent:!0,label:"Use Missile Barrage ASAP below mana %",labelTooltip:"When below this mana %, use Missile Barrage proc as soon as possible. Can be useful to conserve mana.",showWhen:e=>0==e.getTalentTree(),changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),H({fieldName:"useArcaneBarrage",label:"Use Arcane Barrage",labelTooltip:"Includes Arcane Barrage in the rotation.",enableWhen:e=>e.getTalents().arcaneBarrage,showWhen:e=>0==e.getTalentTree(),changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])}),H({fieldName:"maintainImprovedScorch",label:"Maintain Imp. Scorch",labelTooltip:"Always use Scorch when below 5 stacks, or < 4s remaining on debuff.",showWhen:e=>e.getTalents().improvedScorch>0,changeEmitter:e=>n.onAny([e.rotationChangeEmitter,e.talentsChangeEmitter])})]},Z={items:[{id:40416,enchant:3820,gems:[41285,39998]},{id:44661,gems:[40026]},{id:40419,enchant:3810,gems:[40051]},{id:44005,enchant:3722,gems:[40026]},{id:44002,enchant:3832,gems:[39998,39998]},{id:44008,enchant:2332,gems:[39998,0]},{id:40415,enchant:3604,gems:[39998,0]},{id:40561,gems:[39998]},{id:40417,enchant:3719,gems:[39998,40051]},{id:40558,enchant:3606},{id:40719},{id:40399},{id:39229},{id:40255},{id:40396,enchant:3834},{id:40273},{id:39426}]},ee={items:[{id:45497,enchant:3820,gems:[41285,45883]},{id:45243,gems:[39998]},{id:46134,enchant:3810,gems:[39998]},{id:45618,enchant:3722,gems:[40026]},{id:46130,enchant:3832,gems:[39998,39998]},{id:45446,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45619,gems:[39998,39998,39998]},{id:45488,enchant:3719,gems:[39998,40051,40026]},{id:45135,enchant:3606,gems:[39998,39998]},{id:46046,gems:[39998]},{id:45495,gems:[39998]},{id:45466},{id:45518},{id:45620,enchant:3834,gems:[39998]},{id:45617},{id:45294,gems:[39998]}]},te={items:[{id:47761,enchant:3820,gems:[41285,40133]},{id:47144,gems:[40155]},{id:47758,enchant:3810,gems:[40133]},{id:47552,enchant:3722,gems:[40113]},{id:46993,enchant:3832,gems:[40133,40113,40155]},{id:47208,enchant:2332,gems:[40133,0]},{id:47762,enchant:3604,gems:[40113,0]},{id:46973,gems:[40133,40113,40113]},{id:47760,enchant:3719,gems:[40155,40155]},{id:47097,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47489,gems:[40155]},{id:47188},{id:45518},{id:46980,enchant:3834,gems:[40133]},{id:47958,gems:[40155]},{id:47922}]},ae={items:[{id:47764,enchant:3820,gems:[41285,40133]},{id:47468,gems:[40155]},{id:47767,enchant:3810,gems:[40133]},{id:47551,enchant:3722,gems:[40113]},{id:47425,enchant:3832,gems:[40133,40113,40155]},{id:47485,enchant:2332,gems:[40133,0]},{id:47763,enchant:3604,gems:[40113,0]},{id:47419,gems:[40133,40113,40113]},{id:47765,enchant:3719,gems:[40155,40155]},{id:47454,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47489,gems:[40155]},{id:47477},{id:45518},{id:47422,enchant:3834,gems:[40133]},{id:48032,gems:[40155]},{id:45294,gems:[40113]}]},ne={items:[{id:51281,enchant:3820,gems:[41285,40133]},{id:50724,gems:[40133]},{id:51284,enchant:3810,gems:[40153]},{id:50628,enchant:3722,gems:[40153]},{id:51283,enchant:3832,gems:[40113,40133]},{id:54582,enchant:2332,gems:[40155,0]},{id:50722,enchant:3604,gems:[40153,40133,0]},{id:50613,enchant:3601,gems:[40133,40113,40113]},{id:51282,enchant:3872,gems:[40133,40155]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40133]},{id:50398,gems:[40155]},{id:47188},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40155]}]},se={items:[{id:51281,enchant:3820,gems:[41285,40133]},{id:50724,gems:[40133]},{id:51284,enchant:3810,gems:[40153]},{id:50628,enchant:3722,gems:[40153]},{id:51283,enchant:3832,gems:[40113,40133]},{id:54582,enchant:2332,gems:[40155,0]},{id:50722,enchant:3604,gems:[40153,40133,0]},{id:50613,enchant:3601,gems:[40133,40113,40113]},{id:51282,enchant:3872,gems:[40133,40153]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40133]},{id:50398,gems:[40153]},{id:47188},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40153]}]},ie={items:[{id:42553,enchant:3820,gems:[41285,40014]},{id:39472},{id:34210,enchant:3810,gems:[40049,40014]},{id:41610,enchant:3859},{id:39492,enchant:3832,gems:[40049,40014]},{id:37361,enchant:2332,gems:[0]},{id:39495,enchant:3604,gems:[40049,0]},{id:40696,gems:[40014,40026]},{id:37854,enchant:3719},{id:44202,enchant:3826,gems:[40026]},{id:40585},{id:42644,gems:[40049]},{id:37873},{id:40682},{id:45085,enchant:3834},{id:40698},{id:37177}]},le={items:[{id:40416,enchant:3820,gems:[41285,39998]},{id:44661,gems:[40026]},{id:40419,enchant:3810,gems:[40049]},{id:44005,enchant:3722,gems:[40026]},{id:40418,enchant:3832,gems:[39998,40048]},{id:44008,enchant:2332,gems:[39998,0]},{id:40415,enchant:3604,gems:[39998,0]},{id:40301,gems:[39998]},{id:40560,enchant:3719},{id:40246,enchant:3606},{id:40399},{id:40719},{id:40255},{id:40432},{id:40396,enchant:3834},{id:40273},{id:39712}]},de={items:[{id:46129,enchant:3820,gems:[41285,45883]},{id:45133,gems:[40048]},{id:46134,enchant:3810,gems:[39998]},{id:45242,enchant:3722,gems:[39998]},{id:46130,enchant:3832,gems:[39998,39998]},{id:45446,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[40026,40048,0]},{id:45619,gems:[40048,40048,39998]},{id:46133,enchant:3719,gems:[39998,39998]},{id:45537,enchant:3606,gems:[39998,40026]},{id:45495,gems:[39998]},{id:46046,gems:[39998]},{id:45466},{id:45518},{id:45620,enchant:3834,gems:[39998]},{id:45617},{id:45294,gems:[39998]}]},oe={items:[{id:47761,enchant:3820,gems:[41285,40133]},{id:47144,gems:[40155]},{id:47758,enchant:3810,gems:[40133]},{id:47552,enchant:3722,gems:[40113]},{id:47129,enchant:3832,gems:[40133,40153,40113]},{id:47208,enchant:2332,gems:[40133,0]},{id:47762,enchant:3604,gems:[40113,0]},{id:47084,gems:[40133,40113,40113]},{id:47760,enchant:3719,gems:[40155,40155]},{id:47097,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47237,gems:[40155]},{id:47188},{id:45518},{id:47517,enchant:3834,gems:[40155]},{id:47064},{id:45294,gems:[40153]}]},ce={items:[{id:47764,enchant:3820,gems:[41285,40133]},{id:47468,gems:[40155]},{id:47767,enchant:3810,gems:[40133]},{id:47551,enchant:3722,gems:[40113]},{id:47462,enchant:3832,gems:[40133,40155,40113]},{id:47467,enchant:2332,gems:[40155,0]},{id:47763,enchant:3604,gems:[40113,0]},{id:47447,gems:[40133,40113,40113]},{id:47765,enchant:3719,gems:[40155,40155]},{id:47454,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47489,gems:[40155]},{id:47477},{id:45518},{id:47518,enchant:3834,gems:[40155]},{id:47437},{id:45294,gems:[40113]}]},re={items:[{id:51281,enchant:3820,gems:[41285,40133]},{id:50724,gems:[40133]},{id:51284,enchant:3810,gems:[40152]},{id:50628,enchant:3722,gems:[40152]},{id:50629,enchant:3832,gems:[40113,40133,40155]},{id:50686,enchant:2332,gems:[40133,0]},{id:51280,enchant:3604,gems:[40133,0]},{id:50613,enchant:3601,gems:[40133,40113,40113]},{id:51282,enchant:3872,gems:[40133,40152]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40133]},{id:50398,gems:[40152]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40153]}]},me={items:[{id:51281,enchant:3820,gems:[41285,40133]},{id:50724,gems:[40133]},{id:51284,enchant:3810,gems:[40152]},{id:50628,enchant:3722,gems:[40152]},{id:50629,enchant:3832,gems:[40113,40133,40152]},{id:50651,enchant:2332,gems:[40152,0]},{id:51280,enchant:3604,gems:[40133,0]},{id:50613,enchant:3601,gems:[40133,40113,40113]},{id:51282,enchant:3872,gems:[40133,40152]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40133]},{id:50398,gems:[40152]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40152]}]},pe={items:[{id:45497,enchant:3820,gems:[41285,45883]},{id:45133,gems:[40048]},{id:46134,enchant:3810,gems:[39998]},{id:45618,enchant:3722,gems:[39998]},{id:46130,enchant:3832,gems:[39998,39998]},{id:45446,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45619,gems:[40048,40048,39998]},{id:45488,enchant:3719,gems:[39998,40048,40026]},{id:45537,enchant:3606,gems:[39998,40026]},{id:45495,gems:[39998]},{id:46046,gems:[39998]},{id:45466},{id:45518},{id:45620,enchant:3834,gems:[39998]},{id:45617},{id:45294,gems:[39998]}]},ge={items:[{id:47761,enchant:3820,gems:[41285,40133]},{id:47144,gems:[40155]},{id:47758,enchant:3810,gems:[40133]},{id:47552,enchant:3722,gems:[40113]},{id:46993,enchant:3832,gems:[40133,40113,40153]},{id:47208,enchant:2332,gems:[40133,0]},{id:47762,enchant:3604,gems:[40113,0]},{id:47084,gems:[40133,40113,40113]},{id:47760,enchant:3719,gems:[40155,40155]},{id:47097,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47237,gems:[40155]},{id:47188},{id:45518},{id:47517,enchant:3834,gems:[40155]},{id:47064},{id:45294,gems:[40155]}]},he={items:[{id:47764,enchant:3820,gems:[41285,40133]},{id:47468,gems:[40155]},{id:47767,enchant:3810,gems:[40133]},{id:47551,enchant:3722,gems:[40113]},{id:47425,enchant:3832,gems:[40133,40113,40155]},{id:47467,enchant:2332,gems:[40155,0]},{id:47763,enchant:3604,gems:[40113,0]},{id:47447,gems:[40133,40113,40113]},{id:47765,enchant:3719,gems:[40155,40155]},{id:47454,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:47489,gems:[40155]},{id:47477},{id:45518},{id:47518,enchant:3834,gems:[40155]},{id:47437},{id:45294,gems:[40113]}]},Ie={items:[{id:51281,enchant:3820,gems:[41285,40133]},{id:50724,gems:[40133]},{id:51284,enchant:3810,gems:[40153]},{id:50628,enchant:3722,gems:[40153]},{id:51283,enchant:3832,gems:[40113,40133]},{id:50686,enchant:2332,gems:[40133,0]},{id:51280,enchant:3604,gems:[40133,0]},{id:50613,enchant:3601,gems:[40133,40113,40113]},{id:51282,enchant:3872,gems:[40133,40152]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40133]},{id:50398,gems:[40152]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40152]}]},ue={items:[{id:51281,enchant:3820,gems:[41285,40133]},{id:50724,gems:[40133]},{id:51284,enchant:3810,gems:[40152]},{id:50628,enchant:3722,gems:[40152]},{id:51283,enchant:3832,gems:[40113,40133]},{id:50651,enchant:2332,gems:[40152,0]},{id:51280,enchant:3604,gems:[40133,0]},{id:50613,enchant:3601,gems:[40133,40113,40113]},{id:51282,enchant:3872,gems:[40133,40152]},{id:50699,enchant:3606,gems:[40133,40113]},{id:50664,gems:[40133]},{id:50398,gems:[40152]},{id:50365},{id:50348},{id:50732,enchant:3834,gems:[40113]},{id:50719},{id:50684,gems:[40152]}]},Se={items:[{id:40416,enchant:3820,gems:[41285,39998]},{id:44661,gems:[40026]},{id:40419,enchant:3810,gems:[40051]},{id:44005,enchant:3722,gems:[40026]},{id:40418,enchant:3832,gems:[39998,40048]},{id:44008,enchant:2332,gems:[39998,0]},{id:40415,enchant:3604,gems:[39998,0]},{id:40301,gems:[39998]},{id:40560,enchant:3719},{id:40558,enchant:3606},{id:40399},{id:40719},{id:40255},{id:40432},{id:40396,enchant:3834},{id:39766},{id:39712}]},fe={items:[{id:45497,enchant:3820,gems:[41285,45883]},{id:45133,gems:[40051]},{id:46134,enchant:3810,gems:[39998]},{id:45618,enchant:3722,gems:[40026]},{id:46130,enchant:3832,gems:[39998,39998]},{id:45446,enchant:2332,gems:[39998,0]},{id:45665,enchant:3604,gems:[39998,39998,0]},{id:45619,gems:[40049,40049,39998]},{id:45488,enchant:3719,gems:[39998,40051,40026]},{id:45135,enchant:3606,gems:[39998,40049]},{id:46046,gems:[39998]},{id:45495,gems:[39998]},{id:45466},{id:45518},{id:45620,enchant:3834,gems:[40026]},{id:45617},{id:45294,gems:[39998]}]},Ae={items:[{id:47761,enchant:3820,gems:[41285,40133]},{id:47144,gems:[40155]},{id:47758,enchant:3810,gems:[40133]},{id:47552,enchant:3722,gems:[40113]},{id:47129,enchant:3832,gems:[40133,40153,40155]},{id:47208,enchant:2332,gems:[40155,0]},{id:47762,enchant:3604,gems:[40113,0]},{id:46973,gems:[40133,40113,40113]},{id:47760,enchant:3719,gems:[40155,40155]},{id:47097,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:46046,gems:[40155]},{id:47188},{id:45518},{id:47517,enchant:3834,gems:[40155]},{id:47958,gems:[40155]},{id:45294,gems:[40113]}]},ve={items:[{id:47764,enchant:3820,gems:[41285,40133]},{id:47468,gems:[40155]},{id:47767,enchant:3810,gems:[40133]},{id:47551,enchant:3722,gems:[40113]},{id:47462,enchant:3832,gems:[40133,40155,40155]},{id:47485,enchant:2332,gems:[40155,0]},{id:47763,enchant:3604,gems:[40113,0]},{id:47419,gems:[40133,40113,40113]},{id:47765,enchant:3719,gems:[40155,40155]},{id:47454,enchant:3606,gems:[40133,40113]},{id:45495,gems:[40133]},{id:46046,gems:[40113]},{id:47477},{id:45518},{id:47422,enchant:3834,gems:[40155]},{id:48032,gems:[40155]},{id:45294,gems:[40113]}]},Te={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:55342}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:12472}}}}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:12472}}}}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:12472}}}}},castSpell:{spellId:{otherId:"OtherActionPotion"}}}},{action:{condition:{cmp:{op:"OpLt",lhs:{auraNumStacks:{auraId:{spellId:36032}}},rhs:{const:{val:"4"}}}},castSpell:{spellId:{spellId:42897}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:44401}}},castSpell:{spellId:{spellId:42846}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"25%"}}}},castSpell:{spellId:{spellId:12051}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{currentManaPercent:{}},rhs:{const:{val:"25%"}}}},castSpell:{spellId:{spellId:42897}}}},{action:{castSpell:{spellId:{spellId:42846}}}}]},Pe={type:"TypeAPL",prepullActions:[],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:42921}}}}]},ye={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:55342}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:12873},maxOverlap:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:42859}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:44448}}},castSpell:{spellId:{spellId:42891}}}},{action:{condition:{and:{vals:[{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"12s"}}}}]}},multidot:{spellId:{spellId:55360},maxDots:10,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{spellCastTime:{spellId:{spellId:42859}}}}},castSpell:{spellId:{spellId:42873}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:42859}}}},{action:{castSpell:{spellId:{spellId:42833}}}}]},Fe={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:55342}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{auraShouldRefresh:{auraId:{spellId:12873},maxOverlap:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:42859}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:44448}}},castSpell:{spellId:{spellId:42891}}}},{action:{condition:{and:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:55360}}}}},{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"12s"}}}}]}},castSpell:{spellId:{spellId:55360}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{spellCastTime:{spellId:{spellId:42859}}}}},castSpell:{spellId:{spellId:42873}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{remainingTime:{}},rhs:{const:{val:"3.5s"}}}},castSpell:{spellId:{spellId:42859}}}},{action:{castSpell:{spellId:{spellId:47610}}}}]},Oe={type:"TypeAPL",prepullActions:[],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{cmp:{op:"OpGe",lhs:{remainingTime:{}},rhs:{const:{val:"12s"}}}},multidot:{spellId:{spellId:55360},maxDots:10,maxOverlap:{const:{val:"0ms"}}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:54741}}},{not:{val:{dotIsActive:{spellId:{spellId:42926,tag:9}}}}}]}},castSpell:{spellId:{spellId:42926,tag:9}}}},{action:{condition:{and:{vals:[{auraIsActive:{auraId:{spellId:54741}}},{not:{val:{dotIsActive:{spellId:{spellId:42925,tag:8}}}}}]}},castSpell:{spellId:{spellId:42925,tag:8}}}},{action:{condition:{or:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:42926,tag:9}}}}},{not:{val:{dotIsActive:{spellId:{spellId:42925,tag:8}}}}}]}},castSpell:{spellId:{spellId:42950}}}},{action:{condition:{or:{vals:[{not:{val:{dotIsActive:{spellId:{spellId:42926,tag:9}}}}},{not:{val:{dotIsActive:{spellId:{spellId:42925,tag:8}}}}}]}},castSpell:{spellId:{spellId:42945}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:42926,tag:9}}}}},castSpell:{spellId:{spellId:42926,tag:9}}}},{action:{condition:{not:{val:{dotIsActive:{spellId:{spellId:42925,tag:8}}}}},castSpell:{spellId:{spellId:42925,tag:8}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:44448}}},castSpell:{spellId:{spellId:42891}}}},{action:{castSpell:{spellId:{spellId:42921}}}}]},be={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{spellId:55342}}},doAtValue:{const:{val:"-2s"}}},{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:12472}}}}},castSpell:{spellId:{spellId:26297}}}},{action:{condition:{not:{val:{auraIsActive:{auraId:{spellId:12472}}}}},castSpell:{spellId:{spellId:54758}}}},{action:{condition:{cmp:{op:"OpLe",lhs:{currentManaPercent:{}},rhs:{const:{val:"25%"}}}},castSpell:{spellId:{spellId:12051}}}},{action:{condition:{auraIsActive:{auraId:{spellId:44545}}},castSpell:{spellId:{spellId:44572}}}},{action:{condition:{auraIsActiveWithReactionTime:{auraId:{spellId:44549}}},castSpell:{spellId:{spellId:47610}}}},{action:{castSpell:{spellId:{spellId:42842}}}}]},Me={type:"TypeAPL",prepullActions:[],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:42939}}}}]},we=J("Arcane Preraid Preset",{items:[{id:42553,enchant:3820,gems:[41285,40049]},{id:39472},{id:37673,enchant:3810,gems:[39998]},{id:41610,enchant:3722},{id:39492,enchant:3832,gems:[39998,40049]},{id:37361,enchant:2332,gems:[0]},{id:39495,enchant:3604,gems:[39998,0]},{id:40696,gems:[40049,40026]},{id:37854,enchant:3719},{id:44202,enchant:3606,gems:[40026]},{id:40585},{id:37694},{id:37873},{id:40682},{id:37360,enchant:3854},{},{id:37238}]},{talentTree:0}),Be=J("Arcane P1 Preset",Z,{talentTree:0}),Ce=J("Arcane P2 Preset",ee,{talentTree:0}),We=J("Arcane P3 Preset [A]",te,{talentTree:0,faction:s.Alliance}),Ge=J("Arcane P3 Preset [H]",ae,{talentTree:0,faction:s.Horde}),Ee=J("Arcane P4 Preset [A]",ne,{talentTree:0,faction:s.Alliance}),Le=J("Arcane P4 Preset [H]",se,{talentTree:0,faction:s.Horde}),ke=J("Fire Preraid Preset",ie,{talentTree:1}),Re=J("Fire P1 Preset",le,{talentTree:1}),He=J("Fire P2 Preset",de,{talentTree:1,customCondition:e=>!e.getTalents().icyVeins}),je=J("Fire P3 Preset [A]",oe,{talentTree:1,faction:s.Alliance,customCondition:e=>!e.getTalents().icyVeins}),Je=J("Fire P3 Preset [H]",ce,{talentTree:1,faction:s.Horde,customCondition:e=>!e.getTalents().icyVeins}),Ne=J("Fire P4 Preset [A]",re,{talentTree:1,faction:s.Alliance,customCondition:e=>!e.getTalents().icyVeins}),Ve=J("Fire P4 Preset [H]",me,{talentTree:1,faction:s.Horde,customCondition:e=>!e.getTalents().icyVeins}),Ue=J("FFB P2 Preset",pe,{talentTree:1,customCondition:e=>e.getTalents().icyVeins}),xe=J("FFB P3 Preset [A]",ge,{talentTree:1,customCondition:e=>e.getTalents().icyVeins}),De=J("FFB P3 Preset [H]",he,{talentTree:1,customCondition:e=>e.getTalents().icyVeins}),_e=J("FFB P4 Preset [A]",Ie,{talentTree:1,customCondition:e=>e.getTalents().icyVeins}),$e=J("FFB P4 Preset [H]",ue,{talentTree:1,customCondition:e=>e.getTalents().icyVeins}),ze=J("Frost P1 Preset",Se,{talentTree:2}),Ke=J("Frost P2 Preset",fe,{talentTree:2}),qe=J("Frost P3 Preset [A]",Ae,{talentTree:2,faction:s.Alliance}),Qe=J("Frost P3 Preset [H]",ve,{talentTree:2,faction:s.Horde}),Xe=i.create({only3ArcaneBlastStacksBelowManaPercent:.15,blastWithoutMissileBarrageAboveManaPercent:.2,missileBarrageBelowManaPercent:0,useArcaneBarrage:!1,primaryFireSpell:a.Fireball,maintainImprovedScorch:!1,useIceLance:!1}),Ye=N("Simple Default",l.SpecMage,Xe),Ze=V("Arcane",Te,{talentTree:0}),et=V("Arcane AOE",Pe,{talentTree:0}),tt=V("Fire",ye,{talentTree:1}),at=V("Frostfire",Fe,{talentTree:1}),nt=V("Fire AOE",Oe,{talentTree:1}),st=V("Frost",be,{talentTree:2}),it=V("Frost AOE",Me,{talentTree:2}),lt={name:"Arcane",data:d.create({talentsString:"23000513310033015032310250532-03-023303001",glyphs:o.create({major1:c.GlyphOfArcaneBlast,major2:c.GlyphOfArcaneMissiles,major3:c.GlyphOfMoltenArmor,minor1:r.GlyphOfSlowFall,minor2:r.GlyphOfFrostWard,minor3:r.GlyphOfBlastWave})})},dt={name:"Fire",data:d.create({talentsString:"23000503110003-0055030012303331053120301351",glyphs:o.create({major1:c.GlyphOfFireball,major2:c.GlyphOfMoltenArmor,major3:c.GlyphOfLivingBomb,minor1:r.GlyphOfSlowFall,minor2:r.GlyphOfFrostWard,minor3:r.GlyphOfBlastWave})})},ot={name:"Fire Phase 3",data:d.create({talentsString:"23002303310003-0055030012303330053120300351",glyphs:o.create({major1:c.GlyphOfFireball,major2:c.GlyphOfMoltenArmor,major3:c.GlyphOfLivingBomb,minor1:r.GlyphOfArcaneIntellect,minor2:r.GlyphOfSlowFall})})},ct={name:"Frostfire",data:d.create({talentsString:"-2305032012303331053120311351-023303031",glyphs:o.create({major1:c.GlyphOfFrostfire,major2:c.GlyphOfMoltenArmor,major3:c.GlyphOfLivingBomb,minor1:r.GlyphOfSlowFall,minor2:r.GlyphOfFrostWard,minor3:r.GlyphOfBlastWave})})},rt={name:"Frost",data:d.create({talentsString:"23000503110003--0533030310233100030152231351",glyphs:o.create({major1:c.GlyphOfFrostbolt,major2:c.GlyphOfEternalWater,major3:c.GlyphOfMoltenArmor,minor1:r.GlyphOfSlowFall,minor2:r.GlyphOfFrostWard,minor3:r.GlyphOfBlastWave})})},mt=m.create({armor:e.MoltenArmor}),pt=m.create({armor:e.MoltenArmor,focusMagicPercentUptime:99,focusMagicTarget:p.create()}),gt=g.create({flask:h.FlaskOfTheFrostWyrm,food:I.FoodFirecrackerSalmon,defaultPotion:u.PotionOfSpeed,defaultConjured:S.ConjuredFlameCap,prepopPotion:u.PotionOfSpeed});m.create({armor:e.MoltenArmor,focusMagicTarget:p.create(),waterElementalDisobeyChance:.1}),g.create({defaultPotion:u.PotionOfSpeed,defaultConjured:S.ConjuredFlameCap,flask:h.FlaskOfTheFrostWyrm,food:I.FoodFishFeast});const ht=m.create({armor:e.MoltenArmor,focusMagicPercentUptime:99,focusMagicTarget:p.create()}),It=g.create({defaultPotion:u.PotionOfSpeed,defaultConjured:S.ConjuredDarkRune,flask:h.FlaskOfTheFrostWyrm,food:I.FoodFirecrackerSalmon}),ut={distanceFromTarget:20,profession1:f.Engineering,profession2:f.Tailoring,nibelungAverageCasts:11},St=U(l.SpecMage,{cssClass:"mage-sim-ui",cssScheme:"mage",knownIssues:[],epStats:[A.StatIntellect,A.StatSpirit,A.StatSpellPower,A.StatSpellHit,A.StatSpellCrit,A.StatSpellHaste,A.StatMP5],epReferenceStat:A.StatSpellPower,displayStats:[A.StatHealth,A.StatMana,A.StatStamina,A.StatIntellect,A.StatSpirit,A.StatSpellPower,A.StatSpellHit,A.StatSpellCrit,A.StatSpellHaste,A.StatMP5],modifyDisplayStats:e=>{let t=new v;return 0===e.getTalentTree()&&(t=t.addStat(A.StatSpellHit,1*e.getTalents().arcaneFocus*T)),{talents:t}},defaults:{gear:Je.gear,epWeights:v.fromMap({[A.StatIntellect]:.48,[A.StatSpirit]:.42,[A.StatSpellPower]:1,[A.StatSpellHit]:.38,[A.StatSpellCrit]:.58,[A.StatSpellHaste]:.94,[A.StatMP5]:.09}),consumes:gt,talents:ot.data,specOptions:pt,other:ut,raidBuffs:P.create({giftOfTheWild:y.TristateEffectImproved,bloodlust:!0,manaSpringTotem:y.TristateEffectImproved,wrathOfAirTotem:!0,divineSpirit:!0,swiftRetribution:!0,sanctifiedRetribution:!0,demonicPactSp:500,moonkinAura:y.TristateEffectImproved,arcaneBrilliance:!0}),partyBuffs:F.create({manaTideTotems:1}),individualBuffs:O.create({blessingOfKings:!0,blessingOfWisdom:y.TristateEffectImproved,innervates:0,vampiricTouch:!0,focusMagic:!0}),debuffs:b.create({judgementOfWisdom:!0,misery:!0,ebonPlaguebringer:!0,shadowMastery:!0,heartOfTheCrusader:!0})},playerIconInputs:[q],rotationInputs:Y,includeBuffDebuffInputs:[],excludeBuffDebuffInputs:[],otherInputs:{inputs:[X,Q,x,D,_,$]},encounterPicker:{showExecuteProportion:!0},presets:{rotations:[Ye,Ze,tt,at,st,et,nt,it],talents:[lt,dt,ct,rt,ot],gear:[we,ke,Be,Re,ze,Ce,He,Ke,Ue,We,Ge,qe,Qe,je,Je,xe,De,Ve,Ne,$e,_e,Le,Ee]},autoRotation:e=>{const t=e.getTalentTree();return e.sim.encounter.targets.length>3?0==t?et.rotation.rotation:1==t?nt.rotation.rotation:it.rotation.rotation:0==t?Ze.rotation.rotation:1==t?e.getTalents().iceShards>0?at.rotation.rotation:tt.rotation.rotation:st.rotation.rotation},simpleRotation:(e,t,n)=>{let[s,i]=K(n);const l=M.fromJsonString('{"action":{"castSpell":{"spellId":{"spellId":55342}}},"doAtValue":{"const":{"val":"-2s"}}}'),d=w.fromJsonString('{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":12472}}}}},"castSpell":{"spellId":{"spellId":26297}}}'),o=w.fromJsonString('{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":12472}}}}},"castSpell":{"spellId":{"spellId":54758}}}'),c=w.fromJsonString('{"condition":{"not":{"val":{"auraIsActive":{"auraId":{"spellId":12472}}}}},"castSpell":{"spellId":{"otherId":"OtherActionPotion"}}}'),r=w.fromJsonString('{"condition":{"cmp":{"op":"OpLe","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"25%"}}}},"castSpell":{"spellId":{"spellId":12051}}}'),m=w.fromJsonString(`{"condition":{"or":{"vals":[{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"auraId":{"spellId":36032}}},"rhs":{"const":{"val":"4"}}}},{"and":{"vals":[{"cmp":{"op":"OpLt","lhs":{"auraNumStacks":{"auraId":{"spellId":36032}}},"rhs":{"const":{"val":"3"}}}},{"cmp":{"op":"OpLt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(100*t.only3ArcaneBlastStacksBelowManaPercent).toFixed(0)}%"}}}}]}}]}},"castSpell":{"spellId":{"spellId":42897}}}`),p=w.fromJsonString(`{"condition":{"and":{"vals":[{"auraIsActiveWithReactionTime":{"auraId":{"spellId":44401}}},{"cmp":{"op":"OpLt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(100*t.missileBarrageBelowManaPercent).toFixed(0)}%"}}}}]}},"castSpell":{"spellId":{"spellId":42846}}}`),g=w.fromJsonString('{"condition":{"auraIsActiveWithReactionTime":{"auraId":{"spellId":44401}}},"castSpell":{"spellId":{"spellId":42846}}}'),h=w.fromJsonString(`{"condition":{"cmp":{"op":"OpGt","lhs":{"currentManaPercent":{}},"rhs":{"const":{"val":"${(100*t.blastWithoutMissileBarrageAboveManaPercent).toFixed(0)}%"}}}},"castSpell":{"spellId":{"spellId":42897}}}`),I=w.fromJsonString('{"castSpell":{"spellId":{"spellId":42846}}}'),u=w.fromJsonString('{"castSpell":{"spellId":{"spellId":44781}}}'),S=w.fromJsonString('{"condition":{"auraShouldRefresh":{"auraId":{"spellId":12873},"maxOverlap":{"const":{"val":"4s"}}}},"castSpell":{"spellId":{"spellId":42859}}}'),f=w.fromJsonString('{"condition":{"auraIsActiveWithReactionTime":{"auraId":{"spellId":44448}}},"castSpell":{"spellId":{"spellId":42891}}}'),A=w.fromJsonString('{"condition":{"and":{"vals":[{"cmp":{"op":"OpGt","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"12s"}}}}]}},"multidot":{"spellId":{"spellId":55360},"maxDots":10,"maxOverlap":{"const":{"val":"0ms"}}}}'),v=w.fromJsonString('{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"spellCastTime":{"spellId":{"spellId":42859}}}}},"castSpell":{"spellId":{"spellId":42873}}}'),T=w.fromJsonString('{"condition":{"cmp":{"op":"OpLe","lhs":{"remainingTime":{}},"rhs":{"const":{"val":"4s"}}}},"castSpell":{"spellId":{"spellId":42859}}}'),P=w.fromJsonString('{"castSpell":{"spellId":{"spellId":42833}}}'),y=w.fromJsonString('{"castSpell":{"spellId":{"spellId":47610}}}'),F=w.fromJsonString('{"castSpell":{"spellId":{"spellId":42859}}}'),O=w.fromJsonString('{"condition":{"auraIsActive":{"auraId":{"spellId":44545}}},"castSpell":{"spellId":{"spellId":44572}}}'),b=w.fromJsonString('{"condition":{"auraIsActiveWithReactionTime":{"auraId":{"spellId":44549}}},"castSpell":{"spellId":{"spellId":47610}}}'),W=w.fromJsonString('{"castSpell":{"spellId":{"spellId":42842}}}'),G=w.fromJsonString('{"condition":{"cmp":{"op":"OpEq","lhs":{"auraNumStacks":{"auraId":{"spellId":44545}}},"rhs":{"const":{"val":"1"}}}},"castSpell":{"spellId":{"spellId":42914}}}');s.push(l),e.getTalents().improvedScorch>0&&t.maintainImprovedScorch&&i.push(S);const E=e.getTalentTree();return 0==E?i.push(...[d,o,c,t.missileBarrageBelowManaPercent>0?p:null,m,g,r,h,t.useArcaneBarrage?u:null,I].filter((e=>e))):1==E?i.push(...[f,A,v,T,t.primaryFireSpell==a.Fireball?P:t.primaryFireSpell==a.FrostfireBolt?y:F].filter((e=>e))):2==E&&i.push(...[d,o,r,O,b,t.useIceLance?G:null,W].filter((e=>e))),B.create({prepullActions:s,priorityList:i.map((e=>C.create({action:e})))})},raidSimPresets:[{spec:l.SpecMage,tooltip:"Arcane Mage",defaultName:"Arcane",iconUrl:W(G.ClassMage,0),talents:lt.data,specOptions:ht,consumes:It,otherDefaults:ut,defaultFactionRaces:{[s.Unknown]:E.RaceUnknown,[s.Alliance]:E.RaceGnome,[s.Horde]:E.RaceTroll},defaultGear:{[s.Unknown]:{},[s.Alliance]:{1:Be.gear,2:Ce.gear,3:We.gear,4:Ee.gear},[s.Horde]:{1:Be.gear,2:Ce.gear,3:Ge.gear,4:Le.gear}}},{spec:l.SpecMage,tooltip:"TTW Fire Mage",defaultName:"TTW Fire",iconUrl:W(G.ClassMage,1),talents:dt.data,specOptions:pt,consumes:gt,otherDefaults:ut,defaultFactionRaces:{[s.Unknown]:E.RaceUnknown,[s.Alliance]:E.RaceGnome,[s.Horde]:E.RaceTroll},defaultGear:{[s.Unknown]:{},[s.Alliance]:{1:Re.gear,2:He.gear,3:je.gear,4:Ne.gear},[s.Horde]:{1:Re.gear,2:He.gear,3:Je.gear,4:Ve.gear}}},{spec:l.SpecMage,tooltip:"FFB Fire Mage",defaultName:"FFB Fire",iconUrl:"https://wow.zamimg.com/images/wow/icons/medium/ability_mage_frostfirebolt.jpg",talents:ct.data,specOptions:mt,consumes:gt,otherDefaults:ut,defaultFactionRaces:{[s.Unknown]:E.RaceUnknown,[s.Alliance]:E.RaceGnome,[s.Horde]:E.RaceTroll},defaultGear:{[s.Unknown]:{},[s.Alliance]:{1:Re.gear,2:Ue.gear,3:xe.gear,4:_e.gear},[s.Horde]:{1:Re.gear,2:Ue.gear,3:De.gear,4:$e.gear}}}]});class ft extends z{constructor(e,t){super(e,t,St)}}export{ft as M};
//# sourceMappingURL=sim-4a2b1468.chunk.js.map
