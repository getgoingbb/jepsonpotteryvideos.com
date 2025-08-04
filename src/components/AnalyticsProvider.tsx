import React, { createContext, useContext, useEffect, ReactNode } from 'react';
import { analytics, AnalyticsTracker } from '../utils/analytics';

interface AnalyticsContextType {
  analytics: AnalyticsTracker;
  trackEvent: (action: string, category: string, label?: string, value?: number) => void;
  trackPageView: (pageName: string, pageTitle?: string) => void;
  trackVideoInteraction: (videoId: string, videoTitle: string, action: string) => void;
  trackPurchase: (value: number, itemName?: string) => void;
  trackContact: (method: string, contactType?: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

interface AnalyticsProviderProps {
  children: ReactNode;
}

export const AnalyticsProvider: React.FC<AnalyticsProviderProps> = ({ children }) => {
  useEffect(() => {
    // Initialize analytics when the provider mounts
    analytics.initialize();
  }, []);

  const trackEvent = (action: string, category: string, label?: string, value?: number) => {
    analytics.trackCustomEvent({ action, category, label, value });
  };

  const trackPageView = (pageName: string, pageTitle?: string) => {
    analytics.trackPageView(pageName, pageTitle);
  };

  const trackVideoInteraction = (videoId: string, videoTitle: string, action: string) => {
    analytics.trackVideoInteraction({
      videoId,
      videoTitle,
      action: action as any,
      source: 'youtube'
    });
  };

  const trackPurchase = (value: number, itemName: string = 'Pottery Video Series') => {
    analytics.trackPurchase({
      transactionId: `txn_${Date.now()}`,
      value,
      currency: 'USD',
      items: [{
        itemId: 'pottery_video_series',
        itemName,
        category: 'Education',
        quantity: 1,
        price: value
      }]
    });
  };

  const trackContact = (method: string, contactType: string = 'general') => {
    analytics.trackContact({
      method: method as any,
      contactType: contactType as any
    });
  };

  const contextValue: AnalyticsContextType = {
    analytics,
    trackEvent,
    trackPageView,
    trackVideoInteraction,
    trackPurchase,
    trackContact
  };

  return (
    <AnalyticsContext.Provider value={contextValue}>
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = (): AnalyticsContextType => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};