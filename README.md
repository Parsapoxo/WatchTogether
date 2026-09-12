# با هم ببین

سایتی برای اینکه تو و دوستت یه ویدیو رو هم‌زمان با هم ببینید — وقتی یکی پاز/پلی/سیک می‌کنه، برای اون یکی هم همون اتفاق می‌افته.

## چطور کار می‌کنه

- ویدیوها آپلود نمی‌شن؛ فقط لینک مستقیمشون (فایل `videos.js`) استفاده می‌شه.
- برای رد و بدل کردن لحظه‌ای پیام بین دو مرورگر، از **Supabase Realtime** استفاده شده — یه سرویس رایگانه که با سایت‌های استاتیک مثل گیت‌هاب‌پیجز هم کار می‌کنه و از ایران هم بدون فیلترشکن در دسترسه.
- یه جدول کوچیک هم توی دیتابیس Supabase لازم داریم تا وقتی یکی اتاق می‌سازه، اسم و لینک ویدیوش برای نفر دوم (وقتی با کد اتاق وارد می‌شه) قابل پیدا کردن باشه.

## مرحله ۱: ساخت پروژه‌ی رایگان Supabase

۱. برو به [supabase.com](https://supabase.com) و با گیت‌هاب یا ایمیل ثبت‌نام کن.
۲. روی «New project» بزن.
۳. یه اسم بده (مثلاً `watch-together`)، یه رمز عبور دیتابیس بساز (فقط باید یه جا ذخیره‌ش کنی، بعداً لازمش نداری)، و یه ریجن نزدیک انتخاب کن.
۴. چند دقیقه صبر کن تا پروژه ساخته بشه.

## مرحله ۲: ساخت جدول اتاق‌ها

۱. از منوی سمت چپ پروژه‌ت، برو به **SQL Editor**.
۲. روی «New query» بزن و این کد رو کامل کپی و اجرا کن (دکمه‌ی Run):

```sql
create table rooms (
  code text primary key,
  video jsonb not null,
  created_at timestamptz default now()
);

alter table rooms enable row level security;

create policy "anyone can read rooms"
  on rooms for select
  using (true);

create policy "anyone can create rooms"
  on rooms for insert
  with check (true);
```

این کد یه جدول به اسم `rooms` می‌سازه و اجازه می‌ده هر کسی (چون سایتت عمومیه ولی کد اتاق رو فقط شما دو نفر دارید) بتونه اتاق بسازه و بخونه.

برای اینکه درصد تماشا هم بین شما دو نفر مشترک باشه، یه جدول دیگه هم لازمه. همین‌جا توی SQL Editor این کد رو هم اجرا کن:

```sql
create table progress (
  video_id text primary key,
  fraction float8 not null default 0,
  updated_at timestamptz default now()
);

alter table progress enable row level security;

create policy "anyone can read progress"
  on progress for select
  using (true);

create policy "anyone can insert progress"
  on progress for insert
  with check (true);

create policy "anyone can update progress"
  on progress for update
  using (true);
```

## مرحله ۳: پیدا کردن مقادیر لازم برای کد

۱. از منوی سمت چپ، برو به **Project Settings** (آیکون چرخ‌دنده پایین سایدبار) → **API**.
۲. دو تا مقدار رو از این صفحه برمی‌داری:
   - **Project URL** → همون چیزیه که باید بذاری تو متغیر `SUPABASE_URL`
   - **anon public** (زیر بخش Project API keys) → همون چیزیه که باید بذاری تو متغیر `SUPABASE_ANON_KEY`
۳. این دو مقدار رو برام بفرست تا خودم توی فایل `supabase-config.js` جایگزینشون کنم.

> نکته: کلید anon public برای استفاده‌ی عمومی (سمت مرورگر) طراحی شده و امنه که تو کد سایت باشه؛ چیزی که هرگز نباید جایی بذاری، کلید `service_role` هست (که اصلاً لازممون نیست).

## مرحله ۴: اضافه کردن ویدیوها

فایل `videos.js` رو باز کن و لینک‌های ویدیوهات رو به همون شکلی که نمونه‌اش هست اضافه کن.

## مرحله ۵: آپلود روی گیت‌هاب و فعال کردن GitHub Pages

۱. یه ریپازیتوری جدید بساز و همه‌ی فایل‌های این پوشه (`index.html`, `room.html`, `style.css`, `common.js`, `videos.js`, `supabase-config.js`) رو توش push کن.
۲. برو به تنظیمات ریپازیتوری → بخش **Pages** → از قسمت Branch، شاخه‌ی `main` و پوشه‌ی `/root` رو انتخاب کن و Save بزن.
۳. بعد چند دقیقه، سایتت روی یه آدرس شبیه `https://username.github.io/repo-name/` بالا میاد.

## استفاده

۱. یکی از شما وارد سایت می‌شه، اسمش رو می‌نویسه، یه ویدیو انتخاب می‌کنه و «Start room» می‌زنه.
۲. با دکمه‌ی «Copy invite link» لینک اتاق رو برای اون یکی می‌فرسته (مثلاً توی تلگرام).
۳. نفر دوم لینک رو باز می‌کنه، اسمش رو می‌نویسه و وارد می‌شه.
۴. از این به بعد، پلی/پاز/جلو-عقب کردن هرکدوم، برای اون یکی هم اعمال می‌شه.

> نکته: خود سایت (متن‌ها و دکمه‌ها) الان کامل انگلیسیه؛ این فایل README فقط برای خودت به فارسیه.
