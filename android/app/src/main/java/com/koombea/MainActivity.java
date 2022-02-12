package com.koombea;

import com.facebook.react.ReactActivity;
import com.facebook.react.ReactActivityDelegate; // SplashScreen import needed
import com.zoontek.rnbootsplash.RNBootSplash; // SplashScreen import needed

public class MainActivity extends ReactActivity {

  /**
   * Returns the name of the main component registered from JavaScript. This is used to schedule
   * rendering of the component.
   */
  @Override
  protected String getMainComponentName() {
    return "Koombea";
  }

  @Override
  protected ReactActivityDelegate createReactActivityDelegate() {
    return new ReactActivityDelegate(this, getMainComponentName()) {

      @Override
      protected void loadApp(String appKey) {
        RNBootSplash.init(MainActivity.this); // <- initialize the splash screen
        super.loadApp(appKey);
      }
    };
  }
}
