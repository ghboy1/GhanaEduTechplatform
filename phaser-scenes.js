// ============================================
// GHANA MASTERY QUEST - PHASER VISUAL SCENES
// Interactive visual representations for each concept
// ============================================

const VISUAL_SCENES = {
  'regions': {
    preload: function() {
      this.load.svg('map', 'https://upload.wikimedia.org/wikipedia/commons/5/5d/Blank_Map_of_Ghana%27s_Administrative_Regions.svg', { width: 800, height: 500 });
    },
    create: function() {
      const map = this.add.image(400, 250, 'map').setInteractive();
      map.on('pointerdown', () => {
        this.tweens.add({
          targets: map,
          scale: map.scale * 1.2,
          duration: 500,
          ease: 'Bounce'
        });
      });
    }
  },
  
  'lake': {
    preload: function() {},
    create: function() {
      const graphics = this.add.graphics();
      graphics.fillStyle(0x1E90FF, 1);
      graphics.fillEllipse(400, 250, 400, 200);
      graphics.lineStyle(4, 0x006B3F, 1);
      graphics.strokeEllipse(400, 250, 400, 200);
      this.add.text(300, 250, 'Lake Volta', { font: '32px Space Grotesk', fill: '#f0f4f8' });
      this.tweens.add({
        targets: graphics,
        scale: 1.05,
        duration: 1000,
        yoyo: true,
        repeat: -1
      });
    }
  },
  
  'kakum': {
    preload: function() {},
    create: function() {
      const graphics = this.add.graphics();
      graphics.fillStyle(0x228B22, 1);
      graphics.fillRect(0, 300, 800, 200);
      this.add.text(200, 100, '🌿 Kakum Canopy Walk 🌿', {font:'32px Space Grotesk', fill:'#FFD700'});
      const rope = this.add.line(0,0,100,250,700,250,0x8B4513).setStrokeStyle(8);
      this.tweens.add({targets: rope, y: 260, duration: 2000, yoyo:true, repeat:-1});
    }
  },
  
  'jollof': {
    preload: function() {},
    create: function() {
      this.add.text(250, 200, '🇬🇭 GHANA JOLLOF > ALL 🍚🔥', {font:'40px Space Grotesk', fill:'#FF4500'});
      const particles = this.add.particles(0,0,'__DEFAULT',{
        x:{min:0,max:800}, y:{min:0,max:500}, speed:200, lifespan:3000,
        quantity:2, blendMode:'ADD', scale:{start:1,end:0}
      });
    }
  },
  
  'fufu': {
    preload: function() {},
    create: function() {
      this.add.circle(400,250,100,0xFFD700).setStrokeStyle(8,0x006B3F);
      this.add.text(320,230,'FUFU',{font:'48px Space Grotesk',fill:'#000'});
      this.add.circle(400,350,80,0x8B0000);
    }
  },
  
  'sankofa': {
    preload: function() {},
    create: function() {
      this.add.text(300,200,'SANKOFA',{font:'48px Space Grotesk',fill:'#FFD700'});
      this.add.text(200,300,'"Go back and get it"',{font:'28px Space Grotesk',fill:'#fff'});
      const bird = this.add.text(380,380,'🦅',{font:'80px'}).setOrigin(0.5);
      this.tweens.add({targets:bird, angle:360, duration:10000, repeat:-1});
    }
  },
  
  'empire': {
    preload: function() {},
    create: function() {
      this.add.text(200,200,'🏰 Ashanti Empire 🏰', {font:'48px Space Grotesk',fill:'#FFD700'});
      this.add.text(150,300,'Powerful 18th-19th century kingdom', {font:'24px Space Grotesk',fill:'#fff'});
    }
  },
  
  'nkrumah': {
    preload: function() {},
    create: function() {
      this.add.text(250,200,'👑 Kwame Nkrumah 👑', {font:'48px Space Grotesk',fill:'#FFD700'});
      this.add.text(180,300,'First President of Ghana', {font:'24px Space Grotesk',fill:'#fff'});
    }
  },

  'independence': {
    preload: function() {},
    create: function() {
      this.add.text(150,180,'🇬🇭 INDEPENDENCE 🇬🇭', {font:'48px Space Grotesk',fill:'#FFD700'});
      this.add.text(200,280,'6th March 1957', {font:'36px Space Grotesk',fill:'#CE1126'});
      this.add.text(150,350,'"Ghana, your beloved country is free forever!"', {font:'20px Space Grotesk',fill:'#fff'});
    }
  },

  'goldenstool': {
    preload: function() {},
    create: function() {
      this.add.text(200,150,'👑 GOLDEN STOOL 👑', {font:'44px Space Grotesk',fill:'#FFD700'});
      this.add.text(150,250,'Symbol of Asante Unity', {font:'28px Space Grotesk',fill:'#fff'});
      const stool = this.add.rectangle(400,350,120,80,0xFFD700);
      this.tweens.add({targets:stool, y:340, duration:1500, yoyo:true, repeat:-1});
    }
  },

  'kente': {
    preload: function() {},
    create: function() {
      const colors = [0xFFD700, 0xCE1126, 0x006B3F, 0x000000];
      for(let i=0; i<10; i++) {
        for(let j=0; j<6; j++) {
          const color = colors[Math.floor(Math.random()*colors.length)];
          this.add.rectangle(80*i+40, 80*j+40, 75, 75, color);
        }
      }
      this.add.text(250,220,'KENTE CLOTH',{font:'48px Space Grotesk',fill:'#FFD700'});
    }
  },

  'adinkra': {
    preload: function() {},
    create: function() {
      this.add.text(200,100,'ADINKRA SYMBOLS', {font:'40px Space Grotesk',fill:'#FFD700'});
      this.add.text(250,200,'Gye Nyame', {font:'32px Space Grotesk',fill:'#fff'});
      this.add.text(200,280,'"Except for God"', {font:'24px Space Grotesk',fill:'#CE1126'});
      const symbol = this.add.circle(400,380,60,0x000000,0).setStrokeStyle(5,0xFFD700);
      this.add.circle(400,380,40,0x000000,0).setStrokeStyle(4,0xFFD700);
    }
  },

  'cocoa': {
    preload: function() {},
    create: function() {
      this.add.text(250,150,'🍫 COCOA 🍫', {font:'48px Space Grotesk',fill:'#8B4513'});
      this.add.text(200,250,'2nd Largest Producer', {font:'28px Space Grotesk',fill:'#FFD700'});
      this.add.text(250,330,'800,000 tonnes/year', {font:'24px Space Grotesk',fill:'#fff'});
      for(let i=0; i<5; i++) {
        this.add.ellipse(150+i*120,420,40,60,0x8B4513);
      }
    }
  },

  'gold': {
    preload: function() {},
    create: function() {
      this.add.text(280,150,'⚒️ GOLD MINING ⚒️', {font:'40px Space Grotesk',fill:'#FFD700'});
      this.add.text(250,250,'Gold Coast Legacy', {font:'28px Space Grotesk',fill:'#fff'});
      for(let i=0; i<8; i++) {
        const x = 100 + Math.random()*600;
        const y = 350 + Math.random()*100;
        this.add.star(x,y,5,10,25,0xFFD700);
      }
    }
  },

  'stars': {
    preload: function() {},
    create: function() {
      this.add.text(250,150,'⭐ BLACK STARS ⭐', {font:'44px Space Grotesk',fill:'#000'});
      this.add.text(200,250,'4x AFCON Champions', {font:'28px Space Grotesk',fill:'#FFD700'});
      const star = this.add.star(400,370,5,20,40,0x000000);
      this.tweens.add({targets:star, angle:360, duration:3000, repeat:-1});
    }
  },

  'mole': {
    preload: function() {},
    create: function() {
      this.add.text(200,150,'🌳 MOLE NATIONAL PARK 🌳', {font:'36px Space Grotesk',fill:'#228B22'});
      this.add.text(250,250,'90+ Mammal Species', {font:'24px Space Grotesk',fill:'#fff'});
      this.add.text(400,350,'🐘',{font:'100px'}).setOrigin(0.5);
    }
  },

  'elephant': {
    preload: function() {},
    create: function() {
      this.add.text(300,200,'🐘 ELEPHANTS 🐘', {font:'48px Space Grotesk',fill:'#8B8989'});
      this.add.text(250,300,'500+ at Mole Park', {font:'28px Space Grotesk',fill:'#FFD700'});
    }
  },

  'momo': {
    preload: function() {},
    create: function() {
      this.add.text(220,150,'📱 MOBILE MONEY 📱', {font:'40px Space Grotesk',fill:'#FFD700'});
      this.add.text(200,250,'40M+ Active Accounts', {font:'28px Space Grotesk',fill:'#fff'});
      this.add.text(250,330,'Financial Inclusion', {font:'24px Space Grotesk',fill:'#006B3F'});
    }
  },

  'highlife': {
    preload: function() {},
    create: function() {
      this.add.text(250,150,'🎵 HIGHLIFE MUSIC 🎵', {font:'40px Space Grotesk',fill:'#FFD700'});
      this.add.text(220,250,'E.T. Mensah - The King', {font:'26px Space Grotesk',fill:'#fff'});
      const notes = ['♪','♫','♬'];
      for(let i=0; i<6; i++) {
        const note = this.add.text(100+i*120,370,notes[i%3],{font:'48px',fill:'#CE1126'});
        this.tweens.add({targets:note, y:350, duration:1000+i*200, yoyo:true, repeat:-1});
      }
    }
  },

  'default': {
    preload: function() {},
    create: function() {
      this.add.text(200, 200, '🇬🇭 Ghana Heritage 🇬🇭', { font: '36px Space Grotesk', fill: '#FFD700' });
      this.add.text(220, 280, 'Visual Coming Soon!', { font: '28px Space Grotesk', fill: '#fff' });
      
      // Add some stars
      for(let i=0; i<5; i++) {
        const star = this.add.star(150+i*130, 380, 5, 15, 30, 0xFFD700);
        this.tweens.add({
          targets: star,
          angle: 360,
          duration: 2000 + i*500,
          repeat: -1
        });
      }
    }
  }
};

// Function to get scene configuration for a visual
function getSceneForVisual(visual) {
  const sceneConfig = VISUAL_SCENES[visual] || VISUAL_SCENES['default'];
  return {
    preload: sceneConfig.preload,
    create: sceneConfig.create
  };
}