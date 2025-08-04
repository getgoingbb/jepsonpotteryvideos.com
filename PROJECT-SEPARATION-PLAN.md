# 🎯 PROJECT SEPARATION PLAN

## **CURRENT STATE**
We have ONE project with mixed content for TWO different businesses:

### **Business #1: Jepson Pottery Videos** 
- **Domain**: `jepsonpotteryvideos.com`
- **Focus**: Pottery instruction, video series, ceramic arts
- **Target**: Pottery students, ceramic artists, craft enthusiasts
- **Products**: $29.99 video series, pottery classes, custom pottery

### **Business #2: Never Leave the Playground**
- **Domain**: `neverleavetheplayground.com` 
- **Focus**: Wellness speaking, corporate health, movement therapy
- **Target**: Healthcare professionals, corporate wellness, seniors
- **Products**: Speaking engagements, wellness programs, consulting

## **SEPARATION STRATEGY**

### **Option 1: Keep Current Project as Pottery Site (RECOMMENDED)**
```bash
# Current project becomes: POTTERY SITE
# Domain: jepsonpotteryvideos.com
# Content: Pottery instruction, video series, classes
# Components to KEEP: VideoGallery, Gallery, Classes, Shop, pottery-focused content
# Components to REMOVE: StephenVideosCollection, playground philosophy content
```

### **Option 2: Create New Pottery Project**
```bash
# Current project becomes: WELLNESS SITE  
# Domain: neverleavetheplayground.com
# Content: Speaking, corporate wellness, playground philosophy
# Components to KEEP: StephenVideosCollection, playground content
# Components to REMOVE: Pottery-specific components
```

## **RECOMMENDED APPROACH: Option 1**

### **Step 1: Clean Current Project for Pottery Focus**
- ✅ Keep pottery-focused components (VideoGallery, Gallery, Classes, Shop)
- ❌ Remove StephenVideosCollection (wellness content)
- ❌ Remove playground philosophy from HomePage
- ✅ Keep Stephen's pottery branding and favicon
- ✅ Deploy to `jepsonpotteryvideos.com`

### **Step 2: Create New Wellness Project**
- 🆕 Create separate React project for wellness/speaking
- ✅ Include StephenVideosCollection and playground content
- ✅ Use playground branding and colors
- ✅ Deploy to `neverleavetheplayground.com`

## **IMMEDIATE ACTION NEEDED**

### **For Pottery Site (Current Project):**
1. Remove wellness/playground content from HomePage
2. Remove StephenVideosCollection component
3. Focus purely on pottery instruction and video series
4. Ensure all content relates to pottery, ceramics, and classes
5. Deploy to `jepsonpotteryvideos.com`

### **For Wellness Site (New Project):**
1. Create new React project
2. Include playground philosophy content
3. Include StephenVideosCollection for YouTube videos
4. Focus on speaking, corporate wellness, health
5. Deploy to `neverleavetheplayground.com`

## **CONTENT SEPARATION**

### **Pottery Site Content:**
- ✅ Pottery video series ($29.99)
- ✅ Pottery classes and workshops
- ✅ Pottery gallery and techniques
- ✅ Wheel throwing, hand building, glazing
- ✅ Geneva, FL pottery instruction
- ✅ Contact for pottery classes

### **Wellness Site Content:**
- ✅ Speaking engagements and booking
- ✅ Corporate wellness programs
- ✅ Playground philosophy videos
- ✅ Healthcare conference presentations
- ✅ Movement therapy and healthy aging
- ✅ Contact for speaking events

## **BENEFITS OF SEPARATION**

### **SEO Benefits:**
- **Focused keywords** for each business
- **Clear site purpose** for search engines
- **Better user experience** - no confusion
- **Targeted content** for specific audiences

### **Business Benefits:**
- **Professional presentation** for each service
- **Clear value proposition** for visitors
- **Easier marketing** and promotion
- **Separate analytics** and tracking

### **Technical Benefits:**
- **Faster loading** with focused content
- **Easier maintenance** of each site
- **Independent deployment** and updates
- **Cleaner codebase** for each purpose

---

**DECISION NEEDED:** Should we proceed with Option 1 (keep current as pottery, create new for wellness)?