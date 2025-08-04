# 🚨 CRITICAL DEPLOYMENT ISSUE

## **PROBLEM IDENTIFIED**

The **Never Leave the Playground** (wellness/speaking) website is incorrectly deployed to the pottery domain.

### **Current Incorrect State:**
- `jepsonpotteryvideos.com` → Shows wellness content ❌
- `neverleavetheplayground.com` → Should show wellness content ✅

### **What Should Happen:**
- `neverleavetheplayground.com` → Wellness/speaking content ✅
- `jepsonpotteryvideos.com` → Pottery instruction content ✅

## **IMMEDIATE FIXES NEEDED**

### **1. Domain Deployment**
- **Deploy this codebase to**: `neverleavetheplayground.com`
- **Remove this codebase from**: `jepsonpotteryvideos.com`

### **2. Create Separate Pottery Site**
- Build separate React app for pottery instruction
- Deploy pottery app to `jepsonpotteryvideos.com`
- Include pottery-specific content:
  - Pottery video series ($29.99)
  - Wheel throwing classes
  - Hand building techniques
  - Glazing and firing
  - Geneva, FL pottery instruction

### **3. DNS/Hosting Configuration**
- Update Netlify deployment settings
- Ensure correct domain routing
- Set up proper redirects

## **CONTENT SEPARATION**

### **Never Leave the Playground** (This Site)
**Domain**: `neverleavetheplayground.com`
**Content**:
- Health & wellness speaking
- Corporate wellness programs
- Playground philosophy
- Movement therapy
- Speaking engagements
- Healthcare conferences

### **Jepson Pottery Videos** (Separate Site Needed)
**Domain**: `jepsonpotteryvideos.com`
**Content**:
- Pottery instruction videos
- Ceramic arts education
- Video series purchase ($29.99)
- Pottery classes in Geneva, FL
- Wheel throwing, glazing, firing
- Pottery gallery and shop

## **TECHNICAL SOLUTION**

### **Step 1: Fix Current Deployment**
```bash
# This wellness site should deploy to:
# Domain: neverleavetheplayground.com
# Content: Wellness, speaking, corporate health
```

### **Step 2: Create Pottery Site**
```bash
# Create new React app for pottery
# Domain: jepsonpotteryvideos.com  
# Content: Pottery instruction, videos, classes
```

### **Step 3: Update DNS**
```bash
# Ensure domains point to correct sites
# neverleavetheplayground.com → Wellness site
# jepsonpotteryvideos.com → Pottery site
```

## **VERIFICATION CHECKLIST**

- [ ] `neverleavetheplayground.com` shows wellness content
- [ ] `jepsonpotteryvideos.com` shows pottery content
- [ ] No cross-contamination of content
- [ ] Correct sitemaps on each domain
- [ ] Proper SEO for each site's focus
- [ ] Working contact forms and links

---

**Priority**: CRITICAL  
**Impact**: SEO confusion, user confusion, business impact  
**Action Required**: Immediate domain deployment fix