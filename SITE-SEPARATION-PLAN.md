# 🎯 SITE SEPARATION PLAN

## **CURRENT ISSUE**
The logos and content are mixed up between the two different businesses:

### **Jepson Pottery Videos** (Pottery Business)
- **Domain**: `jepsonpotteryvideos.com`
- **Logo**: Should be pottery-themed (pottery wheel, clay pot, etc.)
- **Content**: Pottery instruction, video series, ceramic arts
- **Colors**: Amber/Orange (earth tones for pottery)

### **Never Leave the Playground** (Wellness/Speaking Business)  
- **Domain**: `neverleavetheplayground.com`
- **Logo**: Should be playground-themed (playground equipment, play icons)
- **Content**: Wellness speaking, corporate health, movement therapy
- **Colors**: Blue/Green/Purple (vibrant playground colors)

## **IMMEDIATE FIXES NEEDED**

### **1. Logo Correction**
- ✅ **Pottery Site**: Use pottery-themed logo (🏺 pottery wheel icon)
- ❌ **Current**: Using playground logo on pottery site

### **2. Content Separation**
- ✅ **Pottery Site**: Focus on pottery instruction, video series, classes
- ✅ **Wellness Site**: Focus on speaking, corporate wellness, health

### **3. Domain Deployment**
- ✅ **Deploy pottery content to**: `jepsonpotteryvideos.com`
- ✅ **Deploy wellness content to**: `neverleavetheplayground.com`

## **TECHNICAL SOLUTION**

### **Step 1: Fix Pottery Site (This Codebase)**
```bash
# Current codebase should become the pottery site
# Domain: jepsonpotteryvideos.com
# Logo: Pottery-themed
# Content: Pottery instruction, video series, classes
```

### **Step 2: Create Wellness Site (Separate Codebase)**
```bash
# Create new React app for wellness/speaking
# Domain: neverleavetheplayground.com
# Logo: Playground-themed  
# Content: Speaking, corporate wellness, health
```

### **Step 3: Deploy Correctly**
```bash
# jepsonpotteryvideos.com → Pottery site (this codebase)
# neverleavetheplayground.com → Wellness site (new codebase)
```

## **LOGO SPECIFICATIONS**

### **Pottery Site Logo** (Fixed in Header.tsx)
- **Icon**: 🏺 Pottery wheel or clay pot
- **Colors**: Amber/Orange gradient
- **Text**: "Jepson Pottery Videos"
- **Subtitle**: "Professional Pottery Instruction"

### **Wellness Site Logo** (For separate site)
- **Icon**: 🎪 Playground equipment or play icon
- **Colors**: Blue/Green/Purple gradient  
- **Text**: "Never Leave the Playground"
- **Subtitle**: "Stephen Jepson's Wellness Philosophy"

## **BUSINESS SEPARATION**

### **Pottery Business** (`jepsonpotteryvideos.com`)
- Video series sales ($29.99)
- Pottery classes in Geneva, FL
- Ceramic arts instruction
- Pottery gallery and shop
- Email: stephen@jepsonpotteryvideos.com

### **Wellness Business** (`neverleavetheplayground.com`)
- Speaking engagements
- Corporate wellness programs
- Healthcare conferences
- Movement therapy
- Email: stephen@neverleavetheplayground.com

---

**PRIORITY**: HIGH - Logo confusion affects brand identity
**ACTION**: Deploy pottery content with pottery logo to correct domain