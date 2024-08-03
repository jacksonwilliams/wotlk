import{eB as e,A as t,eN as a,eC as n,bV as s,N as i,P as d,d as l,fb as r,F as o,dN as c,dG as m,dI as g,dL as p,a1 as h,ac as S,G as f,T as u,a4 as I,aA as O,bb as P,x as y,E as A,aB as b,S as R,g as M,u as v,aQ as H,bf as G}from"./detailed_results-f5af08fb.chunk.js";import{t as w,b as k,c as E,r as j,y as T,T as C,s as B,I as W}from"./preset_utils-8c990753.chunk.js";const x=w({fieldName:"aura",values:[{value:e.NoPaladinAura,tooltip:"No Aura"},{actionId:t.fromSpellId(54043),value:e.RetributionAura}]}),D=w({fieldName:"seal",values:[{actionId:t.fromSpellId(42463),value:a.Vengeance},{actionId:t.fromSpellId(20154),value:a.Righteousness},{actionId:t.fromSpellId(20424),value:a.Command,showWhen:e=>e.getTalents().sealOfCommand}],changeEmitter:e=>e.changeEmitter}),N=w({fieldName:"judgement",values:[{actionId:t.fromSpellId(53408),value:n.JudgementOfWisdom},{actionId:t.fromSpellId(20271),value:n.JudgementOfLight}]}),F={items:[{id:44006,enchant:3817,gems:[41398,49110]},{id:44664,gems:[42142]},{id:40578,enchant:3808,gems:[39996]},{id:40403,enchant:3605},{id:40574,enchant:3832,gems:[42142,39996]},{id:40330,enchant:3845,gems:[39996,0]},{id:40541,enchant:3604,gems:[0]},{id:40278,gems:[39996,39996]},{id:44011,enchant:3823,gems:[42142,39996]},{id:40591,enchant:3606},{id:40075},{id:40474},{id:42987},{id:40431},{id:40384,enchant:3789},{},{id:42852}]},L={items:[{id:45472,enchant:3817,gems:[41398,42702]},{id:45517,gems:[39996]},{id:45245,enchant:3808,gems:[39996,39996]},{id:45461,enchant:3605,gems:[39996]},{id:45473,enchant:3832,gems:[39996,39996,39996]},{id:45663,enchant:3845,gems:[39996,0]},{id:45444,enchant:3604,gems:[39996,39996,0]},{id:46095,gems:[42142,42142,42142]},{id:45134,enchant:3823,gems:[39996,39996,39996]},{id:45599,enchant:3606,gems:[39996,39996]},{id:45608,gems:[39996]},{id:45534,gems:[39996]},{id:45609},{id:42987},{id:45516,enchant:3789,gems:[39996,39996]},{},{id:42853}]},V={items:[{id:48614,enchant:3817,gems:[41398,40142]},{id:47110,gems:[40142]},{id:48612,enchant:3808,gems:[40111]},{id:47548,enchant:3605,gems:[40111]},{id:48616,enchant:3832,gems:[49110,40111]},{id:47155,enchant:3845,gems:[40111,40111,0]},{id:48615,enchant:3604,gems:[40142,0]},{id:47002,gems:[40111,40111,40111]},{id:47132,enchant:3823,gems:[42142,42142,42142]},{id:47154,enchant:3606,gems:[40142,40111]},{id:47075,gems:[40111]},{id:46966,gems:[40142]},{id:47131},{id:42987},{id:47520,enchant:3789,gems:[40111,40111]},{},{id:47661}]},U={items:[{id:51277,enchant:3817,gems:[41398,40118]},{id:50633,gems:[40111]},{id:51279,enchant:3808,gems:[40111]},{id:50653,enchant:3605,gems:[40111]},{id:51275,enchant:3832,gems:[40118,49110]},{id:50659,enchant:3845,gems:[42142,0]},{id:50690,enchant:3604,gems:[40111,40111,0]},{id:50707,gems:[40111,40111,45862]},{id:51278,enchant:3823,gems:[42142,42142]},{id:50607,enchant:3606,gems:[40111,40111]},{id:50604,gems:[40111]},{id:50402,gems:[40111]},{id:50706},{id:47131},{id:49623,enchant:3789,gems:[40111,40111,40111]},{},{id:50455}]},J={items:[{id:51277,enchant:3817,gems:[41398,40111]},{id:54581,gems:[40146]},{id:51279,enchant:3808,gems:[40111]},{id:50677,enchant:3605,gems:[40146]},{id:51275,enchant:3832,gems:[40111,49110]},{id:54580,enchant:3845,gems:[40111,0]},{id:50690,enchant:3604,gems:[40146,40111,0]},{id:50707,gems:[40111,40111,40111]},{id:51278,enchant:3823,gems:[40111,40111]},{id:54578,enchant:3606,gems:[40111,40111]},{id:50402,gems:[40111]},{id:54576,gems:[40111]},{id:54590},{id:50706},{id:49623,enchant:3789,gems:[42142,42142,42154]},{},{id:50455}]},K={type:"TypeAPL",prepullActions:[{action:{castSpell:{spellId:{otherId:"OtherActionPotion"}}},doAtValue:{const:{val:"-1s"}}}],priorityList:[{action:{autocastOtherCooldowns:{}}},{action:{castSpell:{spellId:{spellId:67485}}}},{action:{castSpell:{spellId:{spellId:48806}}}},{action:{castSpell:{spellId:{spellId:53408}}}},{action:{castSpell:{spellId:{spellId:35395}}}},{action:{castSpell:{spellId:{spellId:53385}}}},{action:{condition:{auraIsActive:{auraId:{spellId:53488}}},castSpell:{spellId:{spellId:48801}}}},{action:{condition:{cmp:{op:"OpGt",lhs:{remainingTime:{}},rhs:{const:{val:"4s"}}}},castSpell:{spellId:{spellId:48819}}}}]},z=k("PreRaid",{items:[{id:41386,enchant:3817,gems:[41398,40022]},{id:40678},{id:34388,enchant:3875,gems:[39996,40037]},{id:37647,enchant:3605},{id:39633,enchant:3832,gems:[39996,40038]},{id:41355,enchant:3845,gems:[0]},{id:39634,enchant:3604,gems:[39996,0]},{id:40694,gems:[39996,39996]},{id:37193,enchant:3326,gems:[39996,39996]},{id:44297,enchant:3606},{id:40586},{id:37685},{id:42987},{id:40684},{id:37852,enchant:3789},{},{id:37574}]}),_=k("P1 Preset",F),Q=k("P2 Preset",L),q=k("P3 Mace Preset",V),X=k("P4 Preset",U),Y=k("P5 Preset",J),Z=E("Default",K),$={name:"Aura Mastery",data:s.create({talentsString:"050501-05-05232051203331302133231331",glyphs:i.create({major1:d.GlyphOfSealOfVengeance,major2:d.GlyphOfJudgement,major3:d.GlyphOfReckoning,minor1:l.GlyphOfSenseUndead,minor2:l.GlyphOfLayOnHands,minor3:l.GlyphOfBlessingOfKings})})},ee={name:"Divine Sacrifice & Guardian",data:s.create({talentsString:"03-453201002-05222051203331302133201331",glyphs:i.create({major1:d.GlyphOfSealOfVengeance,major2:d.GlyphOfJudgement,major3:d.GlyphOfReckoning,minor1:l.GlyphOfSenseUndead,minor2:l.GlyphOfLayOnHands,minor3:l.GlyphOfBlessingOfKings})})},te=r.create({aura:e.RetributionAura,judgement:n.JudgementOfWisdom}),ae=o.create({defaultPotion:c.PotionOfSpeed,defaultConjured:m.ConjuredDarkRune,flask:g.FlaskOfEndlessRage,food:p.FoodDragonfinFilet}),ne=j(R.SpecRetributionPaladin,{cssClass:"retribution-paladin-sim-ui",cssScheme:"paladin",knownIssues:[],epStats:[h.StatStrength,h.StatAgility,h.StatIntellect,h.StatMP5,h.StatAttackPower,h.StatMeleeHit,h.StatMeleeCrit,h.StatMeleeHaste,h.StatExpertise,h.StatArmorPenetration,h.StatSpellPower,h.StatSpellCrit,h.StatSpellHit,h.StatSpellHaste],epPseudoStats:[S.PseudoStatMainHandDps],epReferenceStat:h.StatAttackPower,displayStats:[h.StatStrength,h.StatAgility,h.StatIntellect,h.StatMP5,h.StatAttackPower,h.StatMeleeHit,h.StatMeleeCrit,h.StatMeleeHaste,h.StatExpertise,h.StatArmorPenetration,h.StatSpellHaste,h.StatSpellPower,h.StatSpellCrit,h.StatSpellHit,h.StatMana,h.StatHealth],modifyDisplayStats:e=>{let t=new f;return u.freezeAllAndDo((()=>{e.getMajorGlyphs().includes(d.GlyphOfSealOfVengeance)&&e.getSpecOptions().seal==a.Vengeance&&(t=t.addStat(h.StatExpertise,10*I))})),{talents:t}},defaults:{gear:_.gear,epWeights:f.fromMap({[h.StatStrength]:2.53,[h.StatAgility]:1.13,[h.StatIntellect]:.15,[h.StatSpellPower]:.32,[h.StatSpellHit]:.41,[h.StatSpellCrit]:.01,[h.StatSpellHaste]:.12,[h.StatMP5]:.05,[h.StatAttackPower]:1,[h.StatMeleeHit]:1.96,[h.StatMeleeCrit]:1.16,[h.StatMeleeHaste]:1.44,[h.StatArmorPenetration]:.76,[h.StatExpertise]:1.8},{[S.PseudoStatMainHandDps]:7.33}),consumes:ae,talents:$.data,specOptions:te,raidBuffs:O.create({arcaneBrilliance:!0,divineSpirit:!0,giftOfTheWild:P.TristateEffectImproved,bloodlust:!0,manaSpringTotem:P.TristateEffectRegular,hornOfWinter:!0,battleShout:P.TristateEffectImproved,sanctifiedRetribution:!0,swiftRetribution:!0,elementalOath:!0,rampage:!0,trueshotAura:!0,icyTalons:!0,totemOfWrath:!0,wrathOfAirTotem:!0,demonicPactSp:500}),partyBuffs:y.create({}),individualBuffs:A.create({judgementsOfTheWise:!0,blessingOfKings:!0,blessingOfMight:P.TristateEffectImproved}),debuffs:b.create({shadowMastery:!0,totemOfWrath:!0,judgementOfWisdom:!0,judgementOfLight:!0,misery:!0,curseOfElements:!0,bloodFrenzy:!0,exposeArmor:!0,sunderArmor:!0,faerieFire:P.TristateEffectImproved,curseOfWeakness:P.TristateEffectRegular})},playerIconInputs:[x,N,D],includeBuffDebuffInputs:[T],excludeBuffDebuffInputs:[],otherInputs:{inputs:[C,B]},encounterPicker:{showExecuteProportion:!1},presets:{rotations:[Z],talents:[$,ee],gear:[z,_,Q,q,X,Y]},autoRotation:e=>Z.rotation.rotation,raidSimPresets:[{spec:R.SpecRetributionPaladin,tooltip:"Retribution Paladin",defaultName:"Retribution",iconUrl:M(v.ClassPaladin,2),talents:$.data,specOptions:te,consumes:ae,defaultFactionRaces:{[H.Unknown]:G.RaceUnknown,[H.Alliance]:G.RaceHuman,[H.Horde]:G.RaceBloodElf},defaultGear:{[H.Unknown]:{},[H.Alliance]:{1:_.gear,2:Q.gear,3:q.gear,4:X.gear,5:Y.gear},[H.Horde]:{1:_.gear,2:Q.gear,3:q.gear,4:X.gear,5:Y.gear}}}]});class se extends W{constructor(e,t){super(e,t,ne)}}export{se as R};
//# sourceMappingURL=sim-f2b64f09.chunk.js.map
