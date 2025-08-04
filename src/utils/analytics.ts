// Enhanced Analytics Utilities for Jepson Pottery Videos
// Comprehensive tracking for all user interactions and business metrics
// UPDATED WITH YOUR GOOGLE ANALYTICS ID: G-3TR227R9TY

export interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  customParameters?: Record<string, any>;
}

export interface VideoAnalytics {
  videoId: string;
  videoTitle: string;
  action: 'play' | 'pause' | 'complete' | 'preview' | 'external_view';
  duration?: number;
  currentTime?: number;
  source?: 'youtube' | 'embedded' | 'preview';
}

export interface PurchaseAnalytics {
  transactionId: string;
  value: number;
  currency: string;
  items: Array<{
    itemId: string;
    itemName: string;
    category: string;
    quantity: number;
    price: number;
  }>;
  source?: string;
}

export interface ContactAnalytics {
  method: 'phone' | 'email' | 'form' | 'newsletter';
  contactType: 'general' | 'classes' | 'support' | 'custom_order';
  value?: number;
}

// Core analytics tracking functions with your GA4 ID
export class AnalyticsTracker {
  private static instance: AnalyticsTracker;
  private isInitialized = false;
  private readonly GA_MEASUREMENT_ID = 'G-3TR227R9TY'; // Your actual GA4 ID

  static getInstance(): AnalyticsTracker {
    if (!AnalyticsTracker.instance) {
      AnalyticsTracker.instance = new AnalyticsTracker();
    }
    return AnalyticsTracker.instance;
  }

  initialize() {
    if (this.isInitialized) return;
    
    // Check if gtag is available
    if (typeof window !== 'undefined' && (window as any).gtag) {
      this.isInitialized = true;
      this.trackPageLoad();
      this.setupAutoTracking();
      
      // Log successful initialization
      console.log(`✅ Analytics initialized with GA4 ID: ${this.GA_MEASUREMENT_ID}`);
    } else {
      console.warn('⚠️ Google Analytics not loaded. Make sure gtag script is included.');
    }
  }

  // Page tracking with enhanced pottery-specific data
  trackPageView(pageName: string, pageTitle?: string) {
    if (!this.isInitialized) return;
    
    (window as any).gtag('event', 'page_view', {
      page_title: pageTitle || document.title,
      page_location: window.location.href,
      page_name: pageName,
      content_group1: 'Pottery Education',
      content_group2: pageName,
      custom_parameter_1: 'pottery_instruction',
      custom_parameter_2: 'stephen_jepson'
    });
    
    console.log(`📊 Page view tracked: ${pageName}`);
  }

  // Section view tracking
  trackSectionView(sectionName: string) {
    if (!this.isInitialized) return;
    
    (window as any).gtag('event', 'section_view', {
      event_category: 'Navigation',
      event_label: sectionName,
      section_name: sectionName,
      content_group1: 'Pottery Education',
      content_group2: sectionName,
      custom_parameter_1: 'pottery_section'
    });
  }

  // Video interaction tracking with enhanced pottery data
  trackVideoInteraction(videoData: VideoAnalytics) {
    if (!this.isInitialized) return;
    
    const { videoId, videoTitle, action, duration, currentTime, source } = videoData;
    
    // Standard video event
    (window as any).gtag('event', action, {
      event_category: 'Video',
      event_label: videoTitle,
      video_title: videoTitle,
      video_id: videoId,
      video_duration: duration || 0,
      video_current_time: currentTime || 0,
      video_source: source || 'unknown',
      content_group1: 'Pottery Education',
      content_group2: 'Video Series',
      custom_parameter_1: 'pottery_video',
      custom_parameter_2: 'stephen_jepson'
    });

    // Enhanced video engagement tracking
    (window as any).gtag('event', 'video_engagement', {
      video_title: videoTitle,
      video_action: action,
      engagement_type: action,
      content_type: 'pottery_instruction',
      instructor: 'stephen_jepson'
    });

    // Facebook Pixel video tracking
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'ViewContent', {
        content_type: 'video',
        content_ids: [videoId],
        content_name: videoTitle,
        content_category: 'pottery_instruction'
      });
    }
    
    console.log(`🎥 Video ${action} tracked: ${videoTitle}`);
  }

  // Purchase tracking with enhanced ecommerce for pottery videos
  trackPurchase(purchaseData: PurchaseAnalytics) {
    if (!this.isInitialized) return;
    
    const { transactionId, value, currency, items, source } = purchaseData;
    
    // GA4 Enhanced Ecommerce
    (window as any).gtag('event', 'purchase', {
      transaction_id: transactionId,
      value: value,
      currency: currency,
      items: items.map(item => ({
        ...item,
        item_brand: 'Jepson Pottery Videos',
        item_category: 'Pottery Education',
        item_category2: 'Video Series',
        custom_parameter_1: 'pottery_purchase'
      })),
      source: source || 'website',
      content_group1: 'Pottery Education',
      content_group2: 'Purchase',
      custom_parameter_1: 'pottery_video_series',
      custom_parameter_2: 'stephen_jepson'
    });

    // Facebook Pixel Purchase
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'Purchase', {
        value: value,
        currency: currency,
        content_ids: items.map(item => item.itemId),
        content_type: 'product',
        content_name: 'Pottery Video Series'
      });
    }
    
    console.log(`💰 Purchase tracked: $${value} ${currency}`);
  }

  // Contact tracking with pottery-specific context
  trackContact(contactData: ContactAnalytics) {
    if (!this.isInitialized) return;
    
    const { method, contactType, value } = contactData;
    
    // Contact event
    (window as any).gtag('event', 'contact', {
      event_category: 'Engagement',
      event_label: method,
      contact_method: method,
      contact_type: contactType,
      value: value || 1,
      content_group1: 'Lead Generation',
      content_group2: 'Contact',
      custom_parameter_1: 'pottery_contact',
      custom_parameter_2: 'stephen_jepson'
    });

    // Lead generation event
    (window as any).gtag('event', 'generate_lead', {
      currency: 'USD',
      value: value || 50, // Estimated lead value
      lead_type: contactType,
      lead_source: method,
      business_type: 'pottery_instruction'
    });

    // Facebook Pixel Lead
    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'Lead', {
        content_name: `${contactType}_inquiry`,
        content_category: 'pottery_instruction',
        value: value || 50
      });
    }
    
    console.log(`📞 Contact tracked: ${method} for ${contactType}`);
  }

  // Phone call tracking
  trackPhoneCall(phoneNumber: string, source?: string) {
    this.trackContact({
      method: 'phone',
      contactType: 'general',
      value: 75 // Higher value for phone calls
    });

    (window as any).gtag('event', 'phone_call', {
      event_category: 'Contact',
      event_label: phoneNumber,
      phone_number: phoneNumber,
      call_source: source || 'website',
      business_type: 'pottery_instruction'
    });
  }

  // Email tracking
  trackEmail(emailAddress: string, emailType: string) {
    this.trackContact({
      method: 'email',
      contactType: emailType as any
    });

    (window as any).gtag('event', 'email_click', {
      event_category: 'Contact',
      event_label: emailAddress,
      email_type: emailType,
      business_type: 'pottery_instruction'
    });
  }

  // Newsletter signup
  trackNewsletterSignup() {
    (window as any).gtag('event', 'sign_up', {
      method: 'newsletter',
      event_category: 'Engagement',
      event_label: 'Newsletter Signup',
      content_group1: 'Lead Generation',
      content_group2: 'Newsletter',
      custom_parameter_1: 'pottery_newsletter'
    });

    if (typeof (window as any).fbq !== 'undefined') {
      (window as any).fbq('track', 'Lead', {
        content_name: 'Newsletter Signup',
        content_category: 'pottery_instruction'
      });
    }
  }

  // Gallery interaction tracking
  trackGalleryInteraction(imageName: string, action: string, galleryType?: string) {
    (window as any).gtag('event', action, {
      event_category: 'Gallery',
      event_label: imageName,
      gallery_type: galleryType || 'main',
      image_name: imageName,
      content_group1: 'Pottery Gallery',
      content_group2: galleryType || 'main',
      custom_parameter_1: 'pottery_gallery'
    });
  }

  // External link tracking
  trackExternalLink(url: string, linkText: string, linkType?: string) {
    (window as any).gtag('event', 'click', {
      event_category: 'External Link',
      event_label: url,
      link_text: linkText,
      link_url: url,
      link_type: linkType || 'external',
      outbound: true,
      custom_parameter_1: 'external_link'
    });
  }

  // Custom event tracking
  trackCustomEvent(event: AnalyticsEvent) {
    if (!this.isInitialized) return;
    
    (window as any).gtag('event', event.action, {
      event_category: event.category,
      event_label: event.label,
      value: event.value || 1,
      custom_parameter_1: 'pottery_custom_event',
      ...event.customParameters
    });
  }

  // Private methods
  private trackPageLoad() {
    (window as any).gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      content_group1: 'Pottery Education',
      content_group2: 'Homepage',
      custom_parameter_1: 'pottery_instruction',
      custom_parameter_2: 'stephen_jepson'
    });
  }

  private setupAutoTracking() {
    // Scroll depth tracking
    let maxScroll = 0;
    window.addEventListener('scroll', () => {
      const scrollPercent = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
        maxScroll = scrollPercent;
        (window as any).gtag('event', 'scroll', {
          event_category: 'Engagement',
          event_label: `${scrollPercent}%`,
          value: scrollPercent,
          scroll_depth: scrollPercent,
          custom_parameter_1: 'pottery_scroll'
        });
      }
    });

    // Time on page tracking
    const startTime = Date.now();
    window.addEventListener('beforeunload', () => {
      const timeOnPage = Math.round((Date.now() - startTime) / 1000);
      (window as any).gtag('event', 'timing_complete', {
        name: 'time_on_page',
        value: timeOnPage,
        event_category: 'Engagement',
        event_label: 'Time on Page',
        custom_parameter_1: 'pottery_engagement'
      });
    });

    // Performance tracking
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          (window as any).gtag('event', 'timing_complete', {
            name: 'page_load_time',
            value: Math.round(perfData.loadEventEnd - perfData.fetchStart),
            event_category: 'Performance',
            event_label: 'Page Load Time',
            custom_parameter_1: 'pottery_performance'
          });
        }
      }, 0);
    });
  }
}

// Export singleton instance
export const analytics = AnalyticsTracker.getInstance();

// Convenience functions for common tracking
export const trackVideoPlay = (videoId: string, videoTitle: string) => {
  analytics.trackVideoInteraction({
    videoId,
    videoTitle,
    action: 'play',
    source: 'youtube'
  });
};

export const trackVideoPurchase = (value: number = 29.99) => {
  analytics.trackPurchase({
    transactionId: `txn_${Date.now()}`,
    value,
    currency: 'USD',
    items: [{
      itemId: 'pottery_video_series',
      itemName: 'Pottery Video Series',
      category: 'Education',
      quantity: 1,
      price: value
    }]
  });
};

export const trackPhoneContact = (phoneNumber: string = '(407) 349-5587') => {
  analytics.trackPhoneCall(phoneNumber, 'website');
};

export const trackEmailContact = (emailType: string = 'general') => {
  analytics.trackEmail('stephen@jepsonpotteryvideos.com', emailType);
};

export const trackSectionNavigation = (sectionName: string) => {
  analytics.trackSectionView(sectionName);
};