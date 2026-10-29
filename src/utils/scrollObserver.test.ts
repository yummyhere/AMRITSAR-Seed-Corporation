import test from 'node:test';
import assert from 'node:assert/strict';
import {
  createScrollObserverConfig,
  computeRevealClasses,
  DEFAULT_SCROLL_OBSERVER_OPTIONS,
} from './scrollObserver.ts';

test('createScrollObserverConfig uses defaults when no options given', () => {
  const config = createScrollObserverConfig();
  assert.equal(config.threshold, DEFAULT_SCROLL_OBSERVER_OPTIONS.threshold);
  assert.equal(config.rootMargin, DEFAULT_SCROLL_OBSERVER_OPTIONS.rootMargin);
  assert.equal(config.triggerOnce, true);
});

test('createScrollObserverConfig clamps threshold between 0 and 1', () => {
  const configHigh = createScrollObserverConfig({ threshold: 1.5 });
  assert.equal(configHigh.threshold, 1);

  const configLow = createScrollObserverConfig({ threshold: -0.2 });
  assert.equal(configLow.threshold, 0);

  const configValid = createScrollObserverConfig({ threshold: 0.25, rootMargin: '0px 0px -20px 0px' });
  assert.equal(configValid.threshold, 0.25);
  assert.equal(configValid.rootMargin, '0px 0px -20px 0px');
});

test('computeRevealClasses returns visible classes when true', () => {
  const visible = computeRevealClasses(true, 'my-custom-class');
  assert.ok(visible.includes('opacity-100'));
  assert.ok(visible.includes('translate-y-0'));
  assert.ok(visible.includes('my-custom-class'));
});

test('computeRevealClasses returns hidden classes when false', () => {
  const hidden = computeRevealClasses(false);
  assert.ok(hidden.includes('opacity-0'));
  assert.ok(hidden.includes('translate-y-9'));
});
