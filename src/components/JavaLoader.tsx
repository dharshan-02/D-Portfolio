import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { introCompleteEvent } from '../hooks/useIntroReady';

export function JavaLoader() {
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(true);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    if (!visible) return;

    const timer = window.setTimeout(() => setExiting(true), reducedMotion ? 700 : 1250);
    return () => window.clearTimeout(timer);
  }, [reducedMotion, visible]);

  if (!visible) return null;

  return (
    <motion.div
      className="java-loader"
      role="status"
      aria-live="polite"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: reducedMotion ? 0 : 0.24, ease: 'easeOut' }}
      onAnimationComplete={() => {
        if (!exiting) return;
        window.dispatchEvent(new Event(introCompleteEvent));
        setVisible(false);
      }}
    >
      <span className="sr-only">Loading portfolio</span>
      <div className="java-loader__content" aria-hidden="true">
        <p className="java-loader__eyebrow">PORTFOLIO / INITIALIZING</p>
        <div className="java-loader__window">
          <div className="java-loader__window-top">
            <span className="java-loader__dots">
              <i />
              <i />
              <i />
            </span>
            <span>Portfolio.java</span>
            <span className="java-loader__language">JAVA</span>
          </div>
          <pre className="java-loader__code">
            <span>
              <b>01</b>
              <i>public class</i> Portfolio {'{'}
            </span>
            <span>
              <b>02</b>   <i>public static void</i> main(String[] args) {'{'}
            </span>
            <span>
              <b>03</b>     System.out.println(<em>"13JU06!"</em>);
            </span>
            <span>
              <b>04</b>   {'}'}
            </span>
            <span>
              <b>05</b> {'}'}
            </span>
          </pre>
        </div>
        <div className="java-loader__status">
          <span>Preparing the portfolio</span>
          <span className="java-loader__percent">LOADING</span>
        </div>
        <div className="java-loader__progress">
          <span />
        </div>
      </div>
    </motion.div>
  );
}
