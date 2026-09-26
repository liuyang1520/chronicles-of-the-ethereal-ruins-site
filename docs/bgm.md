# Chronicles of the Ethereal Ruins (《灵墟纪》) — BGM Prompt Plan & Music Generation Guide

This document provides a comprehensive musical design and production-ready AI prompt catalog for **Chronicles of the Ethereal Ruins** (《灵墟纪》). Each scene is paired with curated emotional tones, acoustic instrumentation, tempo/key specifications, and ready-to-copy prompts tailored for modern AI music generation platforms (such as **Suno v3.5/v4**, **Udio**, and **Stable Audio**).

---

## 1. Sonic Identity & Musical Philosophy

### Core Aesthetic: Eastern Ink & Cosmic Xianxia (空灵水墨 · 仙道玄音)
The soundscape of *Chronicles of the Ethereal Ruins* merges ancient Chinese acoustic traditions with ambient, meditative soundscapes and cosmic Xianxia grandeur.

- **Acoustic Restraint**: Emphasize natural acoustics, wood, silk strings, and stone chimes over harsh synthetic sounds.
- **Breath & Space (留白)**: In Chinese traditional aesthetics, silence and decay (余音) are as poignant as active melody. Guqin harmonics, lingering gong resonances, and flute breaths create deep presence.
- **Dynamic Adaptability**: Gentle meditative plucks during solitary cultivation, mysterious ethereal textures in ancient ruins, and climactic percussion during heavenly tribulations.

### Primary Instrument Palette
- **Silk & Plucked Strings**: Guqin (古琴 - introspective contemplation), Guzheng (古筝 - cascading waterfalls and serene halls), Pipa (琵琶 - agile swordplay and tension), Ruan (阮 - warm mid-range harmony).
- **Bamboo & Breath**: Xiao (箫 - melancholic, solitary, misty night), Dizi (竹笛 - crisp, lively nature and mountain breeze), Xun (埙 - earthy ancient ruin lament).
- **Bowed Strings**: Erhu (二胡), Gaohu (高胡), and Zhonghu (中胡) for lyrical melodies and emotional depth.
- **Sacred Percussion**: Bronze bells (编钟 / 铜钟), stone chimes (磬), wooden fish (木鱼), Daoist prayer bells, and Tang/Taiko war drums (堂鼓 / 大鼓) for ritual breakthroughs and combat.
- **Ambient & Modern Textures**: Ethereal analog synth pads, rain/water droplet field recordings, wind resonances, and delicate crystalline shimmer pads.

---

## 2. Universal Prompting Parameters & Tips

### Best Practices for AI Generators (Suno / Udio / FlowMusic)
1. **Strictly 100% Pure Instrumental**: All BGM tracks in *Chronicles of the Ethereal Ruins* are strictly instrumental backgrounds. Always toggle **Instrumental Mode** ON in the generator (Suno, Udio, FlowMusic). Every copiable prompt explicitly embeds `[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]` and a dedicated vocal-excluding negative prompt.
2. **One-Click Self-Contained Prompts**: Each copiable prompt block in Section 3 is 100% self-contained for one-click copy. It embeds the Track/File ID, Scene Context, Pure Instrumental directive, Negative Prompt, Tempo (BPM), Key/Scale, Duration/Loop Format, Genre, Mood, Instruments, and complete section arrangement tags without needing to cross-reference other sections.
3. **Zero Vocal Contamination**: The instrument palettes and structural tags completely omit any reference to human singing, choral voices, humming, chanting, or vocalise to prevent AI models from generating songs with human singers.
4. **Structure Tags**: Use bracketed structural cues like `[Intro: ...]`, `[Theme A: ...]`, `[Build: ...]`, `[Climax: ...]`, `[Outro: ...]` to guide AI composition progression and dynamic contour.
5. **Looping Optimization**: Ambient and exploration themes conclude with decaying harmonics or natural room/nature resonance, allowing seamless crossfades and loops in-game.

### Universal Negative Prompt (Exclude Unwanted Artifacts)
```text
vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella, distorted electric guitars, aggressive EDM synths, heavy autotune, generic western pop beat, rap, trap hi-hats, harsh dubstep drops, modern dance bassline, muddy low end, cheap MIDI synthetic trumpet
```

---

## 3. Scene-by-Scene BGM Prompt Catalog

---

### Scene 01: Main Theme / Title Screen (《灵墟引》· Chronicles of the Ethereal Ruins)
- **Scene Context**: Game launch, main title menu, first impression of the universe.
- **Vibe / Mood**: Grand, ancient, ethereal, mystical, yearning, cosmic contemplation.
- **Instrumentation**: Guqin, sweeping traditional Chinese orchestral strings, bamboo xiao, delicate guzheng arpeggios, Tibetan sound bowl (颂钵), subtle celestial ambient pad.
- **Tempo & Key**: 68 BPM · D Minor Pentatonic (羽调式).
- **Audio Spec**: Track ID `BGM_01` · File `bgm_main_theme.mp3` · Duration `2:30 - 3:00` · Loop `Natural Fade / Loopable`

#### Copy-Ready Prompt
```text
[Track: BGM_01 · bgm_main_theme.mp3]
[Title: Chronicles of the Ethereal Ruins Main Theme (《灵墟引》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: Game launch, main title menu, first impression of the universe]
[Tempo: 68 BPM]
[Key: D Minor Pentatonic (羽调式)]
[Duration & Format: 2:30 - 3:00 | Natural Fade / Loopable]
[Genre: Xianxia cinematic orchestral, Eastern ambient meditative, ancient Chinese folk]
[Mood: Majestic, mysterious, ancient, ethereal, cosmic transcendence, poetic stillness]
[Instruments: Guqin, Guzheng, Bamboo Xiao, Erhu ensemble, bronze chime bell, subtle ambient glass pad, deep ambient strings]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Resonant bronze bell, gentle Guqin harmonics, distant wind ambience]
[Theme A: Melancholic bamboo Xiao melody over warm Guzheng cascading arpeggios]
[Build: Slow swelling Chinese orchestral strings and ethereal acoustic resonance]
[Theme B: Soaring Erhu melody harmonized with sweeping strings, majestic and expansive]
[Interlude: Intimate Guqin pluck with natural room resonance]
[Climax: Full Eastern orchestral cadence, thunderous low percussion, rising celestial strings]
[Outro: Slow Xiao fadeout, single deep bronze bell strike, lingering silence]
[End]
```

---

### Scene 02: Qingya Peak & Sanctum Meditation (《青崖静坐》· Solitary Cave Cultivation)
- **Scene Context**: The player's home sanctum (洞府), peaceful idle meditation, absorbing spiritual Qi.
- **Vibe / Mood**: Tranquil, introspective, deeply calming, peaceful, restorative, zen stillness.
- **Instrumentation**: Solo Guqin with authentic string sliding noise, soft bamboo flute (Xiao), gentle mountain stream sound, faint wind chime.
- **Tempo & Key**: 52 BPM (very slow, steady heart rate) · C Pentatonic (宫调式).
- **Audio Spec**: Track ID `BGM_02` · File `bgm_sanctum_meditate.mp3` · Duration `3:00 - 4:30` · Loop `Seamless Ambient Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_02 · bgm_sanctum_meditate.mp3]
[Title: Qingya Sanctum Meditation (《青崖静坐》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: The player's home sanctum (洞府), peaceful idle meditation, absorbing spiritual Qi]
[Tempo: 52 BPM (very slow, steady heart rate)]
[Key: C Pentatonic (宫调式)]
[Duration & Format: 3:00 - 4:30 | Seamless Ambient Loop]
[Genre: Traditional Chinese Zen ambient, meditative Guqin solo, nature soundscape]
[Mood: Tranquil, peaceful, contemplative, restorative, introspective, serene, slow tempo]
[Instruments: Solo Guqin, subtle low-register Xiao flute, soft wind chimes, mountain breeze, trickling spring water]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Natural spring water droplets, soft gentle wind, distant chime]
[Section: Intimate Guqin plucking, deep resonant bass strings, delicate harmonic overtones]
[Movement: Soft breathing Xiao flute weaves quietly behind the Guqin]
[Ambience: Long sustaining notes, meditative decay, organic finger-sliding string nuances]
[Outro: Fading water drops, final pure Guqin harmonic ringing into silence]
[End]
```

---

### Scene 03: Dao Inquiry Sect Mountain Gate & Scripture Pavilion (《问道仙门》· The Mountain Gateway)
- **Scene Context**: Wandering through the towering sect arches, ancient pine trees, cloud pavilions, and sacred Sutra archives.
- **Vibe / Mood**: Reverent, scholarly, immortal grace, serene, noble, orderly.
- **Instrumentation**: Guzheng, Pipa (soft lyrical), Erhu quartet, temple bronze chimes, subtle woodblock and bamboo flute.
- **Tempo & Key**: 72 BPM · G Major Pentatonic (徵调式).
- **Audio Spec**: Track ID `BGM_03` · File `bgm_sect_gate.mp3` · Duration `2:45 - 3:30` · Loop `Seamless Acoustic Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_03 · bgm_sect_gate.mp3]
[Title: Dao Inquiry Sect - Gates and Scriptures (《问道仙门》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: Wandering through the towering sect arches, ancient pine trees, cloud pavilions, and sacred Sutra archives]
[Tempo: 72 BPM]
[Key: G Major Pentatonic (徵调式)]
[Duration & Format: 2:45 - 3:30 | Seamless Acoustic Loop]
[Genre: Classical Chinese folk, elegant Xianxia chamber music, palace ambient]
[Mood: Elegant, scholarly, noble, reverent, peaceful, harmonious, enlightened]
[Instruments: Guzheng, lyrical Pipa, Erhu, Temple bronze chimes, wooden clappers, Dizi flute]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Clear temple bell strike, fluttering Guzheng glissando]
[Theme A: Graceful Dizi flute melody accompanied by gentle Pipa rhythm]
[Theme B: Warm Erhu harmonies illustrating mist curling around immortal pavilions]
[Variation: Interplay between Guzheng waterfall arpeggios and ancient bronze bells]
[Outro: Peaceful descending melody on Guzheng, ending on a pure chime resonance]
[End]
```

---

### Scene 04: Misty Bamboo Sea (《雾隐竹风》· Whispering Leaves & Hidden Deer)
- **Scene Context**: Exploring the bamboo labyrinth, gathering spiritual herbs, following sacred white deer through the fog.
- **Vibe / Mood**: Airy, mysterious, secluded, organic, wandering, slightly surreal.
- **Instrumentation**: Bamboo Dizi, earthy ceramic Xun (埙), light Ruan strums, gentle wind rustling bamboo foliage.
- **Tempo & Key**: 62 BPM · A Minor Pentatonic.
- **Audio Spec**: Track ID `BGM_04` · File `bgm_bamboo_sea.mp3` · Duration `2:30 - 3:15` · Loop `Seamless Nature Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_04 · bgm_bamboo_sea.mp3]
[Title: Whispering Bamboo Sea (《雾隐竹风》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: Exploring the bamboo labyrinth, gathering spiritual herbs, following sacred white deer through the fog]
[Tempo: 62 BPM]
[Key: A Minor Pentatonic]
[Duration & Format: 2:30 - 3:15 | Seamless Nature Loop]
[Genre: Mystical Eastern folk, nature ambient, bamboo flute meditation]
[Mood: Mysterious, secluded, ethereal, organic, peaceful wandering, gentle curiosity]
[Instruments: Earthy Xun flute, high bamboo Dizi, Ruan, light percussive bamboo chimes, wind rustle]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Ambient mountain wind rustling bamboo leaves, distant bird call]
[Theme: Earthy Xun flute breathes an ancient nostalgic motif]
[Development: Agile Dizi flute enters, mimicking playful spirits in the fog]
[Rhythm: Delicate plucked Ruan provides a light, walking cadence]
[Outro: Xun and Dizi echo each other into the mountain fog]
[End]
```

---

### Scene 05: Lan Sea & Sunken Star Shoals (《沧海星沉》· Coastal Tides & Starfall Ruins)
- **Scene Context**: The eastern coastal cliffs, archipelago trade routes, submerged shrines beneath glowing tides.
- **Vibe / Mood**: Oceanic, vast, dreamlike, melancholic, mystical wonder, tidal ebb and flow.
- **Instrumentation**: Ethereal Guzheng with aquatic reverb, Tibetan sound bowl (颂钵), deep ocean pad, lyrical Erhu, gentle cymbal swell.
- **Tempo & Key**: 60 BPM · F Pentatonic.
- **Audio Spec**: Track ID `BGM_05` · File `bgm_lanhai_tides.mp3` · Duration `3:00 - 4:00` · Loop `Seamless Ocean Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_05 · bgm_lanhai_tides.mp3]
[Title: Lan Sea and Sunken Star Shoals (《沧海星沉》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: The eastern coastal cliffs, archipelago trade routes, submerged shrines beneath glowing tides]
[Tempo: 60 BPM]
[Key: F Pentatonic]
[Duration & Format: 3:00 - 4:00 | Seamless Ocean Loop]
[Genre: Ethereal oceanic ambient, Xianxia maritime soundtrack, atmospheric instrumental]
[Mood: Vast, dreamlike, melancholic, oceanic, sparkling, celestial tides, mysterious ruins]
[Instruments: Guzheng with long shimmer reverb, meditation sound bowls, deep ocean wave pads, lyrical Erhu, soft wind]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Ambient ocean surf sound, shimmering metallic sound bowl resonance]
[Theme: Cascading Guzheng arpeggios like starlight reflecting on nighttime sea swells]
[Interlude: Lyrical, soulful Erhu solo performing an ancient coastal melody]
[Depth: Warm submerged synthesizer pad providing deep sea grandeur]
[Outro: Waves gently receding on wet stones, lingering crystal harmonics]
[End]
```

---

### Scene 06: Northern Wastes & Snow Pass (《北荒朔雪》· The Sword Tundra)
- **Scene Context**: Frozen glacial battlefields, howling blizzards, broken ancient swords half-buried in permafrost.
- **Vibe / Mood**: Desolate, stark, solitary, heroic, chilly, unyielding resolve.
- **Instrumentation**: Solitary Xiao flute, stark bowed Erhu (playing cold, lingering vibratos), howling winter wind ambience, deep isolated bass drum.
- **Tempo & Key**: 56 BPM · E Minor Pentatonic.
- **Audio Spec**: Track ID `BGM_06` · File `bgm_beihuang_snow.mp3` · Duration `2:45 - 3:30` · Loop `Seamless Ambient Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_06 · bgm_beihuang_snow.mp3]
[Title: Northern Wastes - Frost and Steel (《北荒朔雪》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: Frozen glacial battlefields, howling blizzards, broken ancient swords half-buried in permafrost]
[Tempo: 56 BPM]
[Key: E Minor Pentatonic]
[Duration & Format: 2:45 - 3:30 | Seamless Ambient Loop]
[Genre: Cinematic desolate Eastern ambient, tragic heroic instrumental, cold atmospheric folk]
[Mood: Desolate, frozen, heroic, solitary, determined, unyielding martial heart, chilly]
[Instruments: Solitary Xiao flute, mournful Erhu, distant cold blizzard wind, sparse deep drum heartbeat]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Howling winter blizzard wind, single low drum beat echoing across ice fields]
[Theme: Solitary Xiao flute melody, mournful, sharp, penetrating the frost]
[Build: Erhu enters with trembling vibrato, evoking ancient fallen swordsmen]
[Contrast: Deep resonant bass drone creating a sense of immense freezing wilderness]
[Outro: Wind swallows the melody, leaving only the rhythm of slow steps in heavy snow]
[End]
```

---

### Scene 07: Yunmeng Marsh & Star-Lit Lake (《云梦浮生》· The Purple Nebulae Waters)
- **Scene Context**: The vast enchanted marshlands, glowing lotus blossoms, the mysterious Book of Destiny, violet fog.
- **Vibe / Mood**: Enigmatic, otherworldly, hypnotic, intoxicating, magical, poetic.
- **Instrumentation**: Chinese Harp (Konghou / 箜篌), delicate Pipa tremolo, warm electronic dream pads, misty bamboo flute, soft temple chime.
- **Tempo & Key**: 65 BPM · Bb Pentatonic.
- **Audio Spec**: Track ID `BGM_07` · File `bgm_yunmeng_marsh.mp3` · Duration `3:00 - 4:00` · Loop `Seamless Shimmer Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_07 · bgm_yunmeng_marsh.mp3]
[Title: Yunmeng Marsh - Dream of Floating Reflections (《云梦浮生》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: The vast enchanted marshlands, glowing lotus blossoms, the mysterious Book of Destiny, violet fog]
[Tempo: 65 BPM]
[Key: Bb Pentatonic]
[Duration & Format: 3:00 - 4:00 | Seamless Shimmer Loop]
[Genre: Dreamy Xianxia ambient, celestial Eastern fantasy, mystical lounge meditation]
[Mood: Hypnotic, enigmatic, otherworldly, purple mist, luminous, magical, serene dreamscape]
[Instruments: Ancient Chinese harp Konghou, shimmering Pipa tremolo, soft lush ambient synth pad, misty Dizi flute]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Shimmering harp glissando with soft warm ambient drone]
[Theme: Delicate, enchanting Pipa motif like glowing blossoms on water]
[Atmosphere: Airy flute melodies weaving through lush, warm harmonic clouds]
[Rhythm: Subtle, organic water droplet percussion with soft spatial delay]
[Outro: Slow dreamlike decay, gentle celestial sparkle, fading into purple mist]
[End]
```

---

### Scene 08: The Ethereal Ruins & Celestial Ascension Dais (《万法归墟》· The Void Throne)
- **Scene Context**: Beyond the Ascension Dais, shattered floating islands in the cosmos, ancient celestial war monuments, primordial Dao.
- **Vibe / Mood**: Epic, cosmic, sacred, sublime, awe-inspiring, transcendental.
- **Instrumentation**: Monumental bronze chime bells, sweeping cinematic orchestral strings, deep cosmic drones, crystalline ambient pads, thunderous Tang drums, heroic Guqin lead.
- **Tempo & Key**: 70 BPM · C# Minor Pentatonic.
- **Audio Spec**: Track ID `BGM_08` · File `bgm_ethereal_ruins.mp3` · Duration `3:30 - 4:30` · Loop `Seamless Void Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_08 · bgm_ethereal_ruins.mp3]
[Title: The Ethereal Ruins - Cosmic Ascension Dais (《万法归墟》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: Beyond the Ascension Dais, shattered floating islands in the cosmos, ancient celestial war monuments, primordial Dao]
[Tempo: 70 BPM]
[Key: C# Minor Pentatonic]
[Duration & Format: 3:30 - 4:30 | Seamless Void Loop]
[Genre: Epic Xianxia cinematic orchestral, cosmic celestial fantasy, grand ambient]
[Mood: Sublime, awe-inspiring, cosmic, ancient divine war, transcendent, monumental grandeur]
[Instruments: Monumental bronze chimes, heavy cinematic percussion, full strings, virtuosic Guqin, cosmic sub-bass, crystalline ambient pads]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Deep cosmic sub-bass drone, resonant bronze bell echoes across the void]
[Theme A: Piercing Guqin harmonics backed by crystalline celestial ambient pads]
[Build: Rhythmic Tang drums and low brass enter, building immense celestial weight]
[Climax: Full orchestral explosion with sweeping strings, soaring brass accents, and mighty gong strikes]
[Resolution: Floating starry ambient texture with solitary Guqin notes drifting in eternity]
[End]
```

---

### Scene 09: Nine Heavens Tribulation & Breakthrough (《九天雷劫》· Storm of Transcendence)
- **Scene Context**: The cultivator breaking through major bottlenecks (Qi Refinement to Foundation, Golden Core to Nascent Soul), sky turns purple, heavenly lightning crashes.
- **Vibe / Mood**: Intense, dramatic, electrifying, triumphant, defiant, transcendental climax.
- **Instrumentation**: Rapid Tang war drums, Taiko rhythm, electric-charged orchestral strings, furious Pipa flourishes, roaring bronze gongs, thunder crashes.
- **Tempo & Key**: 118 BPM (driving, energetic) · D Minor.
- **Audio Spec**: Track ID `BGM_09` · File `bgm_tribulation.mp3` · Duration `2:00 - 2:45` · Loop `Dynamic Climax / One-shot`

#### Copy-Ready Prompt
```text
[Track: BGM_09 · bgm_tribulation.mp3]
[Title: Nine Heavens Heavenly Tribulation (《九天雷劫》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: The cultivator breaking through major bottlenecks (Qi Refinement to Foundation, Golden Core to Nascent Soul), sky turns purple, heavenly lightning crashes]
[Tempo: 118 BPM (driving, energetic)]
[Key: D Minor]
[Duration & Format: 2:00 - 2:45 | Dynamic Climax / One-shot]
[Genre: High-intensity Xianxia action, cinematic battle orchestral, Eastern war drum drama]
[Mood: Tense, electrifying, defiant, dramatic, monumental struggle, triumphant breakthrough]
[Instruments: Fast Tang war drums, rapid martial Pipa, intense string ostinato, thunder sound design, heavy bronze gongs, soaring horn line]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Low rumbling thunder, ominous rapid drum pulse, tension rising]
[Phase 1: Rapid Pipa martial finger-picking over pounding tribal war drums]
[Phase 2: Driving string ostinato builds unbearable tension as lightning strikes]
[Climax: Massive thunderous percussion drop, soaring triumphant brass and Erhu theme declaring victory over the heavens]
[Outro: Exhausted storm winds settle into a golden heavenly beam of light, peaceful chime]
[End]
```

---

### Scene 10: Martial Daoist Combat & Swordplay (《剑试九霄》· Ink Duel)
- **Scene Context**: Turn-based battles, martial arena duels, beast encounters, elemental spell clashes.
- **Vibe / Mood**: Agile, focused, swift, tactical, rhythmic, stylish ink aesthetic.
- **Instrumentation**: Rapid martial Pipa, crisp wooden percussion, bamboo clappers, agile Dizi runs, energetic cello & double bass, metallic sword unsheathing accents.
- **Tempo & Key**: 128 BPM · A Minor.
- **Audio Spec**: Track ID `BGM_10` · File `bgm_ink_combat.mp3` · Duration `2:00 - 2:30` · Loop `High Energy Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_10 · bgm_ink_combat.mp3]
[Title: Ink Duel - Sword and Spirit (《剑试九霄》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: Turn-based battles, martial arena duels, beast encounters, elemental spell clashes]
[Tempo: 128 BPM (agile martial rhythm)]
[Key: A Minor]
[Duration & Format: 2:00 - 2:30 | High Energy Loop]
[Genre: Martial arts Xianxia soundtrack, dynamic Eastern combat, energetic acoustic battle]
[Mood: Swift, agile, focused, tactical, rhythmic martial arts, stylish, sharp]
[Instruments: Martial Pipa, agile bamboo Dizi, Chinese opera drums, wooden clappers, punchy acoustic bass, crisp metal sword accents]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Sharp sword clash sound, instant fast Pipa groove]
[Section A: Driving rhythmic percussion with nimble Dizi flute flourishes]
[Section B: Pipa and Dizi trade rapid acrobatic solos in call-and-response]
[Drop: Powerful drum cadence punctuating martial strikes and spell releases]
[Outro: Final sharp unison strike on drum and gong, crisp wooden clapper stop]
[End]
```

---

### Scene 11: Artisan Forge & Alchemy Chamber (《炉火松烟》· Crafting Pills and Blades)
- **Scene Context**: Crafting pills in the alchemy furnace, hammering spiritual iron at the sword terrace, inscribing talismans.
- **Vibe / Mood**: Warm, rhythmic, industrious, meditative craftsmanship, crackling hearth.
- **Instrumentation**: Warm Ruan strums, rhythmic woodblocks and stone clicks, gentle Guzheng, soft crackling fire ambience, low steady flute.
- **Tempo & Key**: 78 BPM · C Major.
- **Audio Spec**: Track ID `BGM_11` · File `bgm_artisan_forge.mp3` · Duration `2:30 - 3:15` · Loop `Warm Steady Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_11 · bgm_artisan_forge.mp3]
[Title: Furnace Flame and Pine Smoke (《炉火松烟》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: Crafting pills in the alchemy furnace, hammering spiritual iron at the sword terrace, inscribing talismans]
[Tempo: 78 BPM (steady workshop pulse)]
[Key: C Major]
[Duration & Format: 2:30 - 3:15 | Warm Steady Loop]
[Genre: Cozy Eastern crafting music, warm artisanal acoustic folk, workshop ambient]
[Mood: Warm, focused, rhythmic, content, artisanal, steady craftsmanship, cozy]
[Instruments: Warm acoustic Ruan, rhythmic stone and wood percussion, gentle Guzheng, crackling hearth fire, mellow flute]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Faint crackle of furnace flames, steady wooden mallet rhythm]
[Theme: Warm, bouncy Ruan melody paired with gentle Guzheng counterpoint]
[Groove: Satisfying, clockwork percussion resembling hammer on anvil and stone pestle in mortar]
[Interlude: Peaceful flute phrase while the alchemy smoke gently rises]
[Outro: Satisfying final chime as a spiritual pill achieves perfection]
[End]
```

---

### Scene 12: Ancient Shrine Night Rain & Tea (《古祠夜雨》· Rain Over the Pavilion)
- **Scene Context**: Peaceful rainy night, resting under an ancient tiled pavilion roof, sipping spiritual tea, quiet idle hours.
- **Vibe / Mood**: Soothing, melancholic warmth, nostalgic, rain ambience, quiet comfort, sleep-inducing.
- **Instrumentation**: Solo Guqin with generous room reverberation, soft airy Xiao flute, binaural natural rain on clay tiles, gentle thunder in the far distance.
- **Tempo & Key**: 48 BPM (slow, deep relaxation) · F Pentatonic.
- **Audio Spec**: Track ID `BGM_12` · File `bgm_rain_night.mp3` · Duration `3:30 - 5:00` · Loop `Rain Ambient Loop`

#### Copy-Ready Prompt
```text
[Track: BGM_12 · bgm_rain_night.mp3]
[Title: Night Rain on Ancient Tiles (《古祠夜雨》)]
[Format: Pure Instrumental BGM (Strictly no vocals, no singing, no lyrics, no speech)]
[Scene Context: Peaceful rainy night, resting under an ancient tiled pavilion roof, sipping spiritual tea, quiet idle hours]
[Tempo: 48 BPM (slow, deep relaxation)]
[Key: F Pentatonic]
[Duration & Format: 3:30 - 5:00 | Rain Ambient Loop]
[Genre: Lofi Eastern ambient, rain soundscape meditation, relaxation Guqin]
[Mood: Deeply relaxing, comforting, warm melancholia, nostalgic, peaceful rain, cozy shelter]
[Instruments: Solo vintage Guqin, soft airy Xiao flute, binaural continuous rain on roof tiles, distant muffled thunder]
[Negative Prompt: vocals, singing, lyrics, human voice, speech, talking, choir, chanting, humming, vocalise, acapella]

[Structure]
[Intro: Continuous soothing rain sound on ancient clay roof tiles, gentle distant thunder]
[Melody: Extremely slow, sparse Guqin notes with long organic decay]
[Harmony: Soft Xiao flute joins like a cool night breeze through wooden lattice windows]
[Feel: Meditative, unhurried, peaceful breath rhythm]
[Outro: Rain continues to fall gently as the last Guqin string vibration fades away]
[End]
```

---

## 4. Audio Engine Integration Guide

When importing generated tracks into *Chronicles of the Ethereal Ruins*:

| Track ID | File Name | Game Location | Target Duration | Loop Style |
| :--- | :--- | :--- | :--- | :--- |
| `BGM_01` | `bgm_main_theme.mp3` | Title Screen, App Launch | 2:30 - 3:00 | Natural Fade / Loopable |
| `BGM_02` | `bgm_sanctum_meditate.mp3` | Sanctum / Cave (洞府) | 3:00 - 4:30 | Seamless Ambient Loop |
| `BGM_03` | `bgm_sect_gate.mp3` | Sect Mountain (山门) | 2:45 - 3:30 | Seamless Acoustic Loop |
| `BGM_04` | `bgm_bamboo_sea.mp3` | Bamboo Sea (竹海) | 2:30 - 3:15 | Seamless Nature Loop |
| `BGM_05` | `bgm_lanhai_tides.mp3` | Lan Sea (澜海) | 3:00 - 4:00 | Seamless Ocean Loop |
| `BGM_06` | `bgm_beihuang_snow.mp3` | Northern Wastes (北荒) | 2:45 - 3:30 | Seamless Ambient Loop |
| `BGM_07` | `bgm_yunmeng_marsh.mp3` | Yunmeng Marsh (云梦泽) | 3:00 - 4:00 | Seamless Shimmer Loop |
| `BGM_08` | `bgm_ethereal_ruins.mp3` | Ethereal Ruins (灵墟) | 3:30 - 4:30 | Seamless Void Loop |
| `BGM_09` | `bgm_tribulation.mp3` | Breakthrough (破境雷劫) | 2:00 - 2:45 | Dynamic Climax / One-shot |
| `BGM_10` | `bgm_ink_combat.mp3` | Battle / Arena (论道斗法) | 2:00 - 2:30 | High Energy Loop |
| `BGM_11` | `bgm_artisan_forge.mp3` | Artisan Crafting (炼丹铸剑) | 2:30 - 3:15 | Warm Steady Loop |
| `BGM_12` | `bgm_rain_night.mp3` | Night / Rest (旧祠雨夜) | 3:30 - 5:00 | Rain Ambient Loop |

---

*Compiled for Chronicles of the Ethereal Ruins (《灵墟纪》) — All rights reserved.*
