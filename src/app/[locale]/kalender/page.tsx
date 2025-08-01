import { Locale } from '@/types'
import { FinalTimeline } from '@/components/ui/FinalTimeline'
import { ZoomHero } from '@/components/ui/ZoomHero'

interface CalendarPageProps {
  params: Promise<{ locale: Locale }>
}

export default async function CalendarPage({ params }: CalendarPageProps) {
  const { locale } = await params

  return (
    <>
      <ZoomHero locale={locale} />
      
      {/* Scrollable Content */}
      <div className="relative z-10" id="scroll-container">
        {/* Spacer to push content down initially */}
        <div className="h-screen"></div>
        
        {/* Calendar Section - scrolls over fixed hero */}
        <div className="timeline-section">
          <FinalTimeline locale={locale} />
        </div>
      </div>
      
      {/* Super Simple Smooth Scroll */}
      <script dangerouslySetInnerHTML={{
        __html: `
          let isAnimating = false;
          
          // Super smooth animation function
          const smoothScrollTo = (targetY) => {
            if (isAnimating) return;
            isAnimating = true;
            
            const startY = window.scrollY;
            const distance = targetY - startY;
            const duration = 2500; // Sehr langsam und smooth
            const startTime = performance.now();
            
            function easeInOutCubic(t) {
              return t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
            }
            
            function animate(currentTime) {
              const timeElapsed = currentTime - startTime;
              const progress = Math.min(timeElapsed / duration, 1);
              const eased = easeInOutCubic(progress);
              
              window.scrollTo(0, startY + distance * eased);
              
              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                isAnimating = false;
              }
            }
            
            requestAnimationFrame(animate);
          };
          
          window.addEventListener('wheel', (e) => {
            if (isAnimating) {
              e.preventDefault();
              return;
            }
            
            const currentScroll = window.scrollY;
            const windowHeight = window.innerHeight;
            const direction = e.deltaY > 0 ? 'down' : 'up';
            
            // Hero zu Timeline
            if (direction === 'down' && currentScroll < windowHeight * 0.5) {
              e.preventDefault();
              smoothScrollTo(windowHeight);
            }
            // Timeline zurück zu Hero (nur am Timeline-Anfang)
            else if (direction === 'up' && currentScroll >= windowHeight && currentScroll <= windowHeight + 100) {
              e.preventDefault();
              smoothScrollTo(0);
            }
          }, { passive: false });
          
          // Mobile Touch Support für Handy
          let touchStartY = 0;
          let touchStartTime = 0;
          
          window.addEventListener('touchstart', (e) => {
            touchStartY = e.touches[0].clientY;
            touchStartTime = Date.now();
          }, { passive: true });
          
          window.addEventListener('touchmove', (e) => {
            if (isAnimating) {
              e.preventDefault();
              return false;
            }
            
            const touchCurrentY = e.touches[0].clientY;
            const touchDiff = touchStartY - touchCurrentY;
            const currentScroll = window.scrollY;
            const windowHeight = window.innerHeight;
            
            // Sofort triggern bei 50px Bewegung
            if (Math.abs(touchDiff) > 50) {
              // Nach unten swipen im Hero
              if (touchDiff > 0 && currentScroll < windowHeight * 0.5) {
                e.preventDefault();
                smoothScrollTo(windowHeight);
                return false;
              }
              // Nach oben swipen in Timeline-Top
              else if (touchDiff < 0 && 
                       currentScroll >= windowHeight &&
                       currentScroll <= windowHeight + 200) {
                e.preventDefault();
                smoothScrollTo(0);
                return false;
              }
            }
          }, { passive: false });
        `
      }} />
    </>
  )
}

export async function generateMetadata({ params }: CalendarPageProps) {
  const { locale } = await params
  const title = locale === 'de' 
    ? 'Religiöser Kalender - Alevitische Gemeinde Dortmund'
    : 'Dini Takvim - Dortmund Alevi Toplumu'
  
  const description = locale === 'de'
    ? 'Entdecken Sie die wichtigsten alevitischen Feiertage und ihre Bedeutung im interaktiven Kalender.'
    : 'İnteraktif takvimde en önemli Alevi bayramlarını ve anlamlarını keşfedin.'

  return {
    title,
    description,
  }
}
