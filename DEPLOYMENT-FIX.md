# 🎯 POTTERY SITE DEPLOYMENT FIX

## **IMMEDIATE ACTION REQUIRED**

The pottery website needs to be deployed to `jepsonpotteryvideos.com` to stop the incorrect forwarding.

### **Current Issue:**
- `jepsonpotteryvideos.com` forwards to `neverleavetheplayground.com`
- Pottery customers see wellness content instead of pottery content
- This creates confusion and lost sales

### **Solution Steps:**

#### **1. Deploy This Pottery Codebase**
```bash
# This current codebase should be deployed to:
# Domain: jepsonpotteryvideos.com
# Content: Pottery instruction, video series, classes
```

#### **2. Update Domain Settings**
- **Netlify**: Change site domain from `neverleavetheplayground.com` to `jepsonpotteryvideos.com`
- **DNS**: Remove forwarding rule from `jepsonpotteryvideos.com`
- **Custom Domain**: Set `jepsonpotteryvideos.com` as primary domain

#### **3. Verify Deployment**
- [ ] `jepsonpotteryvideos.com` shows pottery content
- [ ] No forwarding to other domains
- [ ] Pottery video series purchase works
- [ ] Contact forms go to pottery email
- [ ] SEO shows pottery keywords

### **Technical Steps:**

#### **In Netlify Dashboard:**
1. Go to Site Settings
2. Domain Management
3. Remove any redirects from `jepsonpotteryvideos.com`
4. Set `jepsonpotteryvideos.com` as primary domain
5. Deploy this pottery codebase

#### **DNS Configuration:**
1. Remove CNAME/redirect from `jepsonpotteryvideos.com`
2. Point `jepsonpotteryvideos.com` directly to Netlify
3. Ensure no forwarding rules exist

### **Content Verification:**
After deployment, `jepsonpotteryvideos.com` should show:
- ✅ Pottery instruction content
- ✅ Video series for $29.99
- ✅ Stephen Jepson pottery classes
- ✅ Pottery gallery and techniques
- ✅ Geneva, Florida pottery contact info

### **Separate Wellness Site:**
Later, deploy wellness content to `neverleavetheplayground.com` as separate site.

---

**PRIORITY**: URGENT - Pottery customers are being redirected incorrectly
**ACTION**: Deploy this pottery codebase to `jepsonpotteryvideos.com` immediately