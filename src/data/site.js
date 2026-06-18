

export const codeSnippets = [
    // index.html
  {
    id: "index-html",
    title: "index.html",
    description: "A clean homepage layout that you can copy into a static HTML file.",
    language: "html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Education Hub</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#eefaf6',
                            100: '#d8f4e8',
                            200: '#b0e7d2',
                            300: '#7fd6b5',
                            400: '#4bbf95',
                            500: '#259f7a',
                            600: '#1c8063',
                            700: '#186653',
                            800: '#175146',
                            900: '#154338'
                        }
                    },
                    boxShadow: {
                        glow: '0 18px 60px rgba(24, 102, 83, 0.18)'
                    }
                }
            }
        }
    </script>

</head>
<body data-page="home" class="min-h-screen text-slate-800 ">
    <header id="site-header"></header>

    <main class="pt-28 sm:pt-32">
        <section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8 lg:pt-4">
            <div class="grid gap-8 lg:grid-cols-2 lg:items-center">
                <div class="space-y-6">
                    <span class="inline-flex rounded-full border border-brand-100 bg-white px-4 py-2 text-sm font-semibold text-brand-700 shadow-sm">Responsive Education Website</span>
                    <div class="space-y-4">
                        <h1 class="max-w-2xl text-4xl font-black leading-tight text-slate-950 sm:text-5xl lg:text-6xl">Build a smarter learning journey with Education Hub.</h1>
                        <p class="max-w-xl text-base leading-7 text-slate-600 sm:text-lg">A clean multi-page education website with shared navigation, live date-time, mobile menu, and separate course/service data files.</p>
                    </div>
                    <div class="flex flex-wrap gap-3">
                        <a href="courses.html" class="rounded-xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700">Explore Courses</a>
                        <a href="contact.html" class="rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700">Contact Us</a>
                    </div>
                    <div class="grid gap-4 sm:grid-cols-3">
                        <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                            <p class="text-2xl font-black text-brand-700">120+</p>
                            <p class="mt-1 text-sm text-slate-500">Learners supported</p>
                        </div>
                        <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                            <p class="text-2xl font-black text-brand-700">35+</p>
                            <p class="mt-1 text-sm text-slate-500">Professional courses</p>
                        </div>
                        <div class="rounded-2xl bg-white p-4 shadow-sm ring-1 ring-slate-100">
                            <p class="text-2xl font-black text-brand-700">24/7</p>
                            <p class="mt-1 text-sm text-slate-500">Learning access</p>
                        </div>
                    </div>
                </div>

                <div class="rounded-[2rem] bg-gradient-to-br from-brand-700 to-brand-500 p-6 shadow-glow ring-1 ring-white/30 sm:p-8">
                    <div class="grid gap-4 sm:grid-cols-2">
                        <div class="rounded-3xl bg-white/95 p-5 shadow-lg">
                            <p class="text-sm font-semibold text-brand-700">Shared Navbar</p>
                            <p class="mt-2 text-sm leading-6 text-slate-600">One common navigation system used across every page.</p>
                        </div>
                        <div class="rounded-3xl bg-slate-950/85 p-5 text-white shadow-lg">
                            <p class="text-sm font-semibold text-brand-200">Mobile Friendly</p>
                            <p class="mt-2 text-sm leading-6 text-white/80">Responsive layout that adapts cleanly to every device.</p>
                        </div>
                        <div class="rounded-3xl bg-brand-100/95 p-5 shadow-lg">
                            <p class="text-sm font-semibold text-brand-800">Courses Data</p>
                            <p class="mt-2 text-sm leading-6 text-slate-700">Course cards are rendered from a separate JS data file.</p>
                        </div>
                        <div class="rounded-3xl bg-white/95 p-5 shadow-lg">
                            <p class="text-sm font-semibold text-brand-700">Services Data</p>
                            <p class="mt-2 text-sm leading-6 text-slate-600">Services are also kept in their own maintainable JS file.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div class="grid gap-6 lg:grid-cols-3">
                <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                    <h2 class="text-xl font-bold text-slate-900">Home</h2>
                    <p class="mt-3 text-sm leading-6 text-slate-500">Landing page with the main introduction and quick navigation.</p>
                </article>
                <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                    <h2 class="text-xl font-bold text-slate-900">About</h2>
                    <p class="mt-3 text-sm leading-6 text-slate-500">Brand story, mission, and goals presented in a clean layout.</p>
                </article>
                <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                    <h2 class="text-xl font-bold text-slate-900">Workflow</h2>
                    <p class="mt-3 text-sm leading-6 text-slate-500">Shared JS powers the navbar, and each page keeps its own content file.</p>
                </article>
            </div>
        </section>
    </main>

    <footer class="border-t border-white/60 bg-white/80">
        <div class="mx-auto max-w-7xl px-4 py-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
            Education Hub - multi-page responsive website with shared navbar and separate JS data files.
        </div>
    </footer>

    <script src="js/common.js"></script>
</body>
</html>`,
    
    
    },
  
    // about.html
  {
    id: "about-html",
    title: "about.html",
    description: "A clean about page layout that you can copy into a static HTML file.",
    language: "html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Education Hub - About</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#eefaf6',
                            100: '#d8f4e8',
                            200: '#b0e7d2',
                            300: '#7fd6b5',
                            400: '#4bbf95',
                            500: '#259f7a',
                            600: '#1c8063',
                            700: '#186653',
                            800: '#175146',
                            900: '#154338'
                        }
                    },
                    boxShadow: {
                        glow: '0 18px 60px rgba(24, 102, 83, 0.18)'
                    }
                }
            }
        }
    </script>
    
</head>
<body data-page="about" class="min-h-screen text-slate-800">
    <header id="site-header"></header>

    <main class="pt-28 sm:pt-32">
        <section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div class="rounded-[2rem] bg-white p-6 shadow-glow ring-1 ring-slate-100 sm:p-8 lg:p-10">
                <span class="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">About Page</span>
                <h1 class="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">A learning platform built for clarity, access, and growth.</h1>
                <p class="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">Education Hub brings courses, services, and support together in one responsive system so learners can move from exploration to action without confusion.</p>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div class="grid gap-6 lg:grid-cols-3">
                <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                    <h2 class="text-xl font-bold text-slate-900">Our mission</h2>
                    <p class="mt-3 text-sm leading-6 text-slate-500">Make education simple to access, easy to understand, and useful in real life.</p>
                </article>
                <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                    <h2 class="text-xl font-bold text-slate-900">Our vision</h2>
                    <p class="mt-3 text-sm leading-6 text-slate-500">Create a platform where students can learn at their own pace on any device.</p>
                </article>
                <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100">
                    <h2 class="text-xl font-bold text-slate-900">Our values</h2>
                    <p class="mt-3 text-sm leading-6 text-slate-500">Clarity, consistency, support, and quality in every learner interaction.</p>
                </article>
            </div>
        </section>
    </main>

    <script src="js/common.js"></script>
</body>
</html>`,

    
    },
  
    // contact.html
  {
    id: "contact-html",
    title: "contact.html",
    description: "A clean contact page layout that you can copy into a static HTML file.",
    language: "html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Education Hub - Contact</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#eefaf6',
                            100: '#d8f4e8',
                            200: '#b0e7d2',
                            300: '#7fd6b5',
                            400: '#4bbf95',
                            500: '#259f7a',
                            600: '#1c8063',
                            700: '#186653',
                            800: '#175146',
                            900: '#154338'
                        }
                    },
                    boxShadow: {
                        glow: '0 18px 60px rgba(24, 102, 83, 0.18)'
                    }
                }
            }
        }
    </script>
    
</head>
<body data-page="contact" class="min-h-screen text-slate-800">
    <header id="site-header"></header>

    <main class="pt-28 sm:pt-32">
        <section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div class="grid gap-8 lg:grid-cols-2">
                <div class="rounded-[2rem] bg-white p-6 shadow-glow ring-1 ring-slate-100 sm:p-8 lg:p-10">
                    <span class="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">Contact Page</span>
                    <h1 class="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Send a message to the Education Hub team.</h1>
                    <p class="mt-5 text-base leading-7 text-slate-600 sm:text-lg">Use this form for course questions, service support, or partnership requests.</p>

                    <div class="mt-8 space-y-4 text-sm text-slate-600">
                        <p><span class="font-semibold text-slate-900">Email:</span> info@educationhub.com</p>
                        <p><span class="font-semibold text-slate-900">Phone:</span> +880 1X XX XX XX XX</p>
                        <p><span class="font-semibold text-slate-900">Address:</span> Dhaka, Bangladesh</p>
                    </div>
                </div>

                <form id="contactForm" class="rounded-[2rem] bg-white p-6 shadow-glow ring-1 ring-slate-100 sm:p-8 lg:p-10" novalidate>
                    <div class="grid gap-4 sm:grid-cols-2">
                        <div>
                            <label for="name" class="mb-2 block text-sm font-semibold text-slate-700">Name</label>
                            <input id="name" name="name" type="text" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" placeholder="Your name">
                            <p id="nameError" class="mt-2 hidden text-sm font-medium text-red-600"></p>
                        </div>
                        <div>
                            <label for="email" class="mb-2 block text-sm font-semibold text-slate-700">Email</label>
                            <input id="email" name="email" type="email" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" placeholder="Your email">
                            <p id="emailError" class="mt-2 hidden text-sm font-medium text-red-600"></p>
                        </div>
                    </div>
                    <div class="mt-4">
                        <label for="subject" class="mb-2 block text-sm font-semibold text-slate-700">Subject</label>
                        <input id="subject" name="subject" type="text" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" placeholder="Message subject">
                        <p id="subjectError" class="mt-2 hidden text-sm font-medium text-red-600"></p>
                    </div>
                    <div class="mt-4">
                        <label for="message" class="mb-2 block text-sm font-semibold text-slate-700">Message</label>
                        <textarea id="message" name="message" rows="5" class="w-full rounded-2xl border border-slate-200 px-4 py-3 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100" placeholder="Write your message here"></textarea>
                        <p id="messageError" class="mt-2 hidden text-sm font-medium text-red-600"></p>
                    </div>
                    <button id="submitButton" type="submit" class="mt-5 w-full rounded-2xl bg-brand-600 px-6 py-3 text-sm font-semibold text-white shadow-glow transition hover:bg-brand-700">Send Message</button>
                    <div id="formStatus" class="mt-4 hidden rounded-2xl border px-4 py-3 text-sm font-medium"></div>
                </form>
            </div>
        </section>
    </main>

    <script src="js/common.js"></script>
    <script src="js/pages/contact.js"></script>
</body>
</html>`,
    },
  

    // services.html
  {
    id: "services-html",
    title: "services.html",
    description: "A clean services page layout that you can copy into a static HTML file.",
    language: "html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Education Hub - Services</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#eefaf6',
                            100: '#d8f4e8',
                            200: '#b0e7d2',
                            300: '#7fd6b5',
                            400: '#4bbf95',
                            500: '#259f7a',
                            600: '#1c8063',
                            700: '#186653',
                            800: '#175146',
                            900: '#154338'
                        }
                    },
                    boxShadow: {
                        glow: '0 18px 60px rgba(24, 102, 83, 0.18)'
                    }
                }
            }
        }
    </script>
    
</head>
<body data-page="services" class="min-h-screen text-slate-800">
    <header id="site-header"></header>

    <main class="pt-28 sm:pt-32">
        <section class="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <div class="rounded-[2rem] bg-white p-6 shadow-glow ring-1 ring-slate-100 sm:p-8 lg:p-10">
                <span class="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">Services Page</span>
                <h1 class="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Support services that help learners stay on track.</h1>
                <p class="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">The service list is also loaded from a separate JavaScript data file so it stays easy to maintain and update.</p>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div id="servicesGrid" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"></div>
        </section>
    </main>

    <script src="js/common.js"></script>
    <script src="js/data/services-data.js"></script>
    <script src="js/pages/services.js"></script>
</body>
</html>`,
    },
  
    // courses.html
  {
    id: "courses-html",
    title: "courses.html",
    description: "A clean courses page layout that you can copy into a static HTML file.",
    language: "html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Education Hub - Courses</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#eefaf6',
                            100: '#d8f4e8',
                            200: '#b0e7d2',
                            300: '#7fd6b5',
                            400: '#4bbf95',
                            500: '#259f7a',
                            600: '#1c8063',
                            700: '#186653',
                            800: '#175146',
                            900: '#154338'
                        }
                    },
                    boxShadow: {
                        glow: '0 18px 60px rgba(24, 102, 83, 0.18)'
                    }
                }
            }
        }
    </script>
   
</head>
<body data-page="courses" class="min-h-screen text-slate-800">
    <header id="site-header"></header>

    <main class="pt-28 sm:pt-32">
        <section class="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <div class="rounded-[2rem] bg-white p-6 shadow-glow ring-1 ring-slate-100 sm:p-8 lg:p-10">
                <span class="inline-flex rounded-full bg-brand-50 px-4 py-2 text-sm font-semibold text-brand-700">Courses Page</span>
                <h1 class="mt-5 text-4xl font-black text-slate-950 sm:text-5xl">Practical courses designed for learners at every stage.</h1>
                <p class="mt-5 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">Browse skill-building courses in web development, design, communication, and career growth. The course list is loaded from a separate JavaScript data file.</p>
            </div>
        </section>

        <section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div id="coursesGrid" class="grid gap-6 md:grid-cols-2 xl:grid-cols-3"></div>
        </section>
    </main>

    <script src="js/common.js"></script>
    <script src="js/data/courses-data.js"></script>
    <script src="js/pages/courses.js"></script>
</body>
</html>`,
  },


//   coursesDetails.html
  {
    id: "coursesDetails-html",
    title: "coursesDetails.html",
    description: "A clean course details page layout that you can copy into a static HTML file.",
    language: "html",
    code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Education Hub - Course Details</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            50: '#eefaf6',
                            100: '#d8f4e8',
                            200: '#b0e7d2',
                            300: '#7fd6b5',
                            400: '#4bbf95',
                            500: '#259f7a',
                            600: '#1c8063',
                            700: '#186653',
                            800: '#175146',
                            900: '#154338'
                        }
                    },
                    boxShadow: {
                        glow: '0 18px 60px rgba(24, 102, 83, 0.18)'
                    }
                }
            }
        }
    </script>
    
</head>
<body data-page="courses" class="min-h-screen text-slate-800">
    <header id="site-header"></header>

    <main class="pt-28 sm:pt-32">
        <section class="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
            <div id="courseDetails" class="space-y-8"></div>
        </section>
    </main>

    <script src="js/common.js"></script>
    <script src="js/data/courses-data.js"></script>
    <script src="js/pages/course-details.js"></script>
</body>
</html>`,
    },
  


// common.js
  {
    id: "common-js",
    title: "js/common.js",
    description: "Shared navigation, mobile menu, and clock logic for your static pages.",
    language: "javascript",
    code: [
      "// common.js",
      "",
      "(() => {",
      "    const navItems = [",
      "        { label: 'Home', href: 'index.html', page: 'home' },",
      "        { label: 'About', href: 'about.html', page: 'about' },",
      "        { label: 'Courses', href: 'courses.html', page: 'courses' },",
      "        { label: 'Services', href: 'services.html', page: 'services' },",
      "        { label: 'Contact', href: 'contact.html', page: 'contact' }",
      "    ];",
      "",
      "    const formatDateTime = () => {",
      "        return new Intl.DateTimeFormat('en-GB', {",
      "            weekday: 'short',",
      "            year: 'numeric',",
      "            month: 'short',",
      "            day: '2-digit',",
      "            hour: '2-digit',",
      "            minute: '2-digit',",
      "            second: '2-digit'",
      "        }).format(new Date());",
      "    };",
      "",
      "    const renderClock = (scope) => {",
      "        scope.querySelectorAll('[data-clock]').forEach((node) => {",
      "            node.textContent = formatDateTime();",
      "        });",
      "    };",
      "",
      "    const buildNav = (activePage) => {",
      "        const navLink = (item, mobile = false) => {",
      "            const isActive = item.page === activePage;",
      "            const baseClass = mobile",
      "                ? 'block rounded-xl px-3 py-2 text-sm font-medium transition'",
      "                : 'text-sm font-semibold transition';",
      "            const stateClass = isActive",
      "                ? mobile",
      "                    ? 'bg-brand-50 text-brand-700'",
      "                    : 'text-brand-700'",
      "                : mobile",
      "                    ? 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'",
      "                    : 'text-slate-600 hover:text-brand-700';",
      "",
      "            return `",
      "                <a data-nav-link href=\"\${item.href}\" class=\"\${baseClass} \${stateClass}\"\${isActive ? ' aria-current=\"page\"' : ''}>\${item.label}</a>",
      "            `;",
      "        };",
      "",
      "        return `",
      "            <div class=\"fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-white/80 backdrop-blur-xl shadow-sm\">",
      "                <div class=\"mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8\">",
      "                    <a href=\"index.html\" class=\"flex items-center gap-3\">",
      "                        <div class=\"flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-600 text-lg font-black text-white shadow-glow\">EH</div>",
      "                        <div>",
      "                            <p class=\"text-base font-black tracking-tight text-slate-950\">Education Hub</p>",
      "                            <p class=\"text-xs text-slate-500\">Learn. Grow. Lead.</p>",
      "                        </div>",
      "                    </a>",
      "",
      "                    <nav class=\"hidden items-center gap-7 lg:flex\">",
      "                        \${navItems.map((item) => navLink(item, false)).join('')}",
      "                    </nav>",
      "",
      "                    <div class=\"hidden rounded-2xl border border-brand-100 bg-brand-50 px-4 py-2 text-right shadow-sm lg:block\">",
      "                        <p class=\"text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-700\">Current Date & Time</p>",
      "                        <p data-clock class=\"mt-0.5 text-sm font-semibold text-slate-800\">Loading...</p>",
      "                    </div>",
      "",
      "                   <button",
      "    data-menu-button",
      "    class=\"inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm transition hover:border-brand-300 hover:text-brand-700 lg:hidden\"",
      "    aria-expanded=\"false\"",
      "    aria-controls=\"mobileMenu\"",
      "    type=\"button\"",
      ">",
      "    <svg",
      "        data-menu-icon",
      "        xmlns=\"http://www.w3.org/2000/svg\"",
      "        class=\"h-6 w-6\"",
      "        fill=\"none\"",
      "        viewBox=\"0 0 24 24\"",
      "        stroke=\"currentColor\"",
      "        stroke-width=\"2\"",
      "    >",
      "        <path",
      "            stroke-linecap=\"round\"",
      "            stroke-linejoin=\"round\"",
      "            d=\"M4 6h16M4 12h16M4 18h16\"",
      "        />",
      "    </svg>",
      "</button>",
      "                </div>",
      "",
      "                <div data-mobile-menu id=\"mobileMenu\" class=\"hidden border-t border-slate-200 bg-white/95 lg:hidden\">",
      "                    <div class=\"mx-auto flex max-w-7xl flex-col gap-2 px-4 py-4 sm:px-6\">",
      "                        \${navItems.map((item) => navLink(item, true)).join('')} ",
      "                        <div class=\"mt-2 rounded-2xl border border-brand-100 bg-brand-50 px-4 py-3\">",
      "                            <p class=\"text-xs font-semibold uppercase tracking-[0.18em] text-brand-700\">Current Date & Time</p>",
      "                            <p data-clock class=\"mt-1 text-sm font-semibold text-slate-800\">Loading...</p>",
      "                        </div>",
      "                    </div>",
      "                </div>",
      "            </div>",
      "        `;",
      "    };",
      "",
      "    const initNavbar = () => {",
      "        const host = document.getElementById('site-header');",
      "        if (!host) {",
      "            return;",
      "        }",
      "",
      "        const activePage = document.body.dataset.page || 'home';",
      "        host.innerHTML = buildNav(activePage);",
      "",
      "        const menuButton = host.querySelector('[data-menu-button]');",
      "        const mobileMenu = host.querySelector('[data-mobile-menu]');",
      "        const menuIcon = host.querySelector(\"[data-menu-icon]\");",
      "        const closeMenu = () => {",
      "            mobileMenu.classList.add('hidden');",
      "            menuButton.setAttribute('aria-expanded', 'false');",
      "            menuIcon.innerHTML = `",
      "                <path",
      "                    stroke-linecap=\"round\"",
      "                    stroke-linejoin=\"round\"",
      "                    d=\"M4 6h16M4 12h16M4 18h16\"",
      "                />",
      "            `;",
      "        };",
      "        const openMenu = () => {",
      "            mobileMenu.classList.remove('hidden');",
      "            menuButton.setAttribute('aria-expanded', 'true');",
      "            menuIcon.innerHTML = `",
      "                <path",
      "                    stroke-linecap=\"round\"",
      "                    stroke-linejoin=\"round\"",
      "                    d=\"M6 18L18 6M6 6l12 12\"",
      "                />",
      "            `;",
      "        };",
      "",
      "        menuButton.addEventListener('click', () => {",
      "            if (mobileMenu.classList.contains('hidden')) {",
      "                openMenu();",
      "            } else {",
      "                closeMenu();",
      "            }",
      "        });",
      "",
      "        host.querySelectorAll('[data-nav-link]').forEach((link) => {",
      "            link.addEventListener('click', closeMenu);",
      "        });",
      "",
      "        renderClock(host);",
      "        setInterval(() => renderClock(host), 1000);",
      "    };",
      "",
      "    document.addEventListener('DOMContentLoaded', initNavbar);",
      "})();"
    ].join("\n"),
    },
  
    {
        id: "courses-js",
        title: "js/courses.js",
        description: "Course listing logic for your static pages.",
        language: "javascript",
        code: [
            "(() => {",
            "    const renderCourses = () => {",
            "        const grid = document.getElementById('coursesGrid');",
            "        if (!grid || !Array.isArray(window.coursesData)) {",
            "            return;",
            "        }",
            "",
            "        grid.innerHTML = window.coursesData.map((course) => `",
            "            <article class=\"rounded-3xl bg-white p-6 shadow-sm ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-glow\">",
            "                <p class=\"text-sm font-semibold text-brand-700\">${course.level}</p>",
            "                <h3 class=\"mt-2 text-xl font-bold text-slate-900\">${course.title}</h3>",
            "                <p class=\"mt-2 text-sm text-slate-500\">Duration: ${course.duration}</p>",
            "                <p class=\"mt-4 text-sm leading-6 text-slate-600\">${course.description}</p>",
            "                <div class=\"mt-5 flex flex-wrap gap-2\">",
            "                    ${course.tags.map((tag) => `",
            "                        <span class=\"rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700\">${tag}</span>",
            "                    `).join('')}",
            "                </div>",
            "                <a href=\"course-details.html?id=${course.id}\" class=\"mt-6 inline-flex rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700\">",
            "                    View Details",
            "                </a>",
            "            </article>",
            "        `).join('');",
            "    };",
            "",
            "    document.addEventListener('DOMContentLoaded', renderCourses);",
            "})();"
        ].join("\n"),
    },

    {
        id: "course-details-js",
        title: "js/course-details.js",
        description: "Course details logic for your static pages.",
        language: "javascript",
        code: [
            "(() => {",
            "    const getCourseId = () => {",
            "        const params = new URLSearchParams(window.location.search);",
            "        return params.get('id');",
            "    };",
            "",
            "    const renderDetails = () => {",
            "        const host = document.getElementById('courseDetails');",
            "        if (!host || !Array.isArray(window.coursesData)) {",
            "            return;",
            "        }",
            "",
            "        const courseId = getCourseId();",
            "        const course = window.coursesData.find((item) => item.id === courseId) || window.coursesData[0];",
            "",
            "        if (!course) {",
            "            host.innerHTML = `",
            "                <div class=\"rounded-[2rem] bg-white p-8 text-center shadow-glow ring-1 ring-slate-100\">",
            "                    <h1 class=\"text-3xl font-black text-slate-950\">Course not found</h1>",
            "                    <p class=\"mt-4 text-slate-600\">No course data is available right now.</p>",
            "                    <a href=\"courses.html\" class=\"mt-6 inline-flex rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700\">Back to Courses</a>",
            "                </div>",
            "            `;",
            "            return;",
            "        }",
            "",
            "        const accent = course.accent || 'from-brand-700 to-brand-500';",
            "",
            "        host.innerHTML = `",
            "            <section class=\"rounded-[2rem] bg-gradient-to-br ${accent} p-6 text-white shadow-glow sm:p-8 lg:p-10\">",
            "                <div class=\"max-w-3xl space-y-5\">",
            "                    <span class=\"inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white/90\">Course Details</span>",
            "                    <h1 class=\"text-4xl font-black leading-tight sm:text-5xl\">${course.title}</h1>",
            "                    <p class=\"text-base leading-7 text-white/85 sm:text-lg\">${course.longDescription}</p>",
            "                    <div class=\"flex flex-wrap gap-3 pt-2 text-sm font-semibold\">",
            "                        <span class=\"rounded-full bg-white/15 px-4 py-2\">Level: ${course.level}</span>",
            "                        <span class=\"rounded-full bg-white/15 px-4 py-2\">Duration: ${course.duration}</span>",
            "                        <span class=\"rounded-full bg-white/15 px-4 py-2\">Fee: ${course.fee}</span>",
            "                    </div>",
            "                </div>",
            "            </section>",
            "",
            "            <section class=\"grid gap-6 lg:grid-cols-[1.4fr_0.9fr]\">",
            "                <div class=\"space-y-6 rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100 sm:p-8\">",
            "                    <div>",
            "                        <h2 class=\"section-title text-2xl font-black text-slate-950\">Course Overview</h2>",
            "                        <p class=\"mt-4 text-sm leading-7 text-slate-600\">${course.description}</p>",
            "                    </div>",
            "",
            "                    <div class=\"grid gap-4 sm:grid-cols-2\">",
            "                        <div class=\"rounded-2xl bg-brand-50 p-5\">",
            "                            <p class=\"text-sm font-semibold text-brand-700\">Instructor</p>",
            "                            <p class=\"mt-2 text-lg font-bold text-slate-900\">${course.instructor}</p>",
            "                        </div>",
            "                        <div class=\"rounded-2xl bg-slate-100 p-5\">",
            "                            <p class=\"text-sm font-semibold text-slate-600\">Class Schedule</p>",
            "                            <p class=\"mt-2 text-lg font-bold text-slate-900\">${course.schedule}</p>",
            "                        </div>",
            "                        <div class=\"rounded-2xl bg-brand-50 p-5\">",
            "                            <p class=\"text-sm font-semibold text-brand-700\">Mode</p>",
            "                            <p class=\"mt-2 text-lg font-bold text-slate-900\">${course.mode}</p>",
            "                        </div>",
            "                        <div class=\"rounded-2xl bg-slate-100 p-5\">",
            "                            <p class=\"text-sm font-semibold text-slate-600\">Fee</p>",
            "                            <p class=\"mt-2 text-lg font-bold text-slate-900\">${course.fee}</p>",
            "                        </div>",
            "                    </div>",
            "",
            "                    <div>",
            "                        <h2 class=\"section-title text-2xl font-black text-slate-950\">What You Will Learn</h2>",
            "                        <ul class=\"mt-4 space-y-3 text-sm leading-7 text-slate-600\">",
            "                            ${course.outcomes.map((item) => `",
            "                                <li class=\"flex gap-3 rounded-2xl bg-slate-50 p-4\">",
            "                                    <span class=\"mt-1 h-2.5 w-2.5 rounded-full bg-brand-600\"></span>",
            "                                    <span>${item}</span>",
            "                                </li>",
            "                            `).join('')}",
            "                        </ul>",
            "                    </div>",
            "",
            "                    <div>",
            "                        <h2 class=\"section-title text-2xl font-black text-slate-950\">Syllabus</h2>",
            "                        <div class=\"mt-4 grid gap-3 sm:grid-cols-2\">",
            "                            ${course.syllabus.map((topic, index) => `",
            "                                <div class=\"rounded-2xl border border-slate-200 bg-white p-4 shadow-sm\">",
            "                                    <p class=\"text-xs font-semibold uppercase tracking-[0.18em] text-brand-700\">Module ${index + 1}</p>",
            "                                    <p class=\"mt-2 text-sm font-medium text-slate-700\">${topic}</p>",
            "                                </div>",
            "                            `).join('')}",
            "                        </div>",
            "                    </div>",
            "                </div>",
            "",
            "                <aside class=\"space-y-6\">",
            "                    <div class=\"rounded-[2rem] bg-white p-6 shadow-sm ring-1 ring-slate-100\">",
            "                        <h2 class=\"text-2xl font-black text-slate-950\">Quick Facts</h2>",
            "                        <div class=\"mt-5 space-y-4 text-sm text-slate-600\">",
            "                            <p><span class=\"font-semibold text-slate-900\">Tags:</span> ${course.tags.join(', ')}</p>",
            "                            <p><span class=\"font-semibold text-slate-900\">Eligibility:</span> ${course.requirements.join(', ')}</p>",
            "                            <p><span class=\"font-semibold text-slate-900\">Duration:</span> ${course.duration}</p>",
            "                            <p><span class=\"font-semibold text-slate-900\">Level:</span> ${course.level}</p>",
            "                        </div>",
            "                        <div class=\"mt-6 flex flex-col gap-3\">",
            "                            <a href=\"courses.html\" class=\"inline-flex justify-center rounded-xl bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-700\">Back to Courses</a>",
            "                            <a href=\"contact.html\" class=\"inline-flex justify-center rounded-xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:text-brand-700\">Ask About This Course</a>",
            "                        </div>",
            "                    </div>",
            "",
            "                    <div class=\"rounded-[2rem] bg-slate-950 p-6 text-white shadow-sm\">",
            "                        <h2 class=\"text-2xl font-black\">Requirements</h2>",
            "                        <ul class=\"mt-4 space-y-3 text-sm leading-7 text-white/80\">",
            "                            ${course.requirements.map((item) => `",
            "                                <li class=\"flex gap-3\">",
            "                                    <span class=\"mt-1 h-2 w-2 rounded-full bg-brand-300\"></span>",
            "                                    <span>${item}</span>",
            "                                </li>",
            "                            `).join('')}",
            "                        </ul>",
            "                    </div>",
            "                </aside>",
            "            </section>",
            "        `;",
            "    };",
            "",
            "    document.addEventListener('DOMContentLoaded', renderDetails);",
            "})();"
        ].join("\n"),
    },

    {
        id: "contact-js",
        title: "js/contact.js",
        description: "Contact form validation and storage logic for your static pages.",
        language: "javascript",
        code: [
            "(() => {",
            "    const storageKey = 'educationHubContactMessages';",
            "",
            "    const getField = (id) => document.getElementById(id);",
            "",
            "    const fields = {",
            "        name: getField('name'),",
            "        email: getField('email'),",
            "        subject: getField('subject'),",
            "        message: getField('message')",
            "    };",
            "",
            "    const errors = {",
            "        name: getField('nameError'),",
            "        email: getField('emailError'),",
            "        subject: getField('subjectError'),",
            "        message: getField('messageError')",
            "    };",
            "",
            "    const form = getField('contactForm');",
            "    const submitButton = getField('submitButton');",
            "    const statusBox = getField('formStatus');",
            "",
            "    const emailPattern = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;",
            "",
            "    const setError = (fieldName, message) => {",
            "        const errorEl = errors[fieldName];",
            "        const inputEl = fields[fieldName];",
            "",
            "        if (errorEl) {",
            "            if (message) {",
            "                errorEl.textContent = message;",
            "                errorEl.classList.remove('hidden');",
            "            } else {",
            "                errorEl.textContent = '';",
            "                errorEl.classList.add('hidden');",
            "            }",
            "        }",
            "",
            "        if (inputEl) {",
            "            inputEl.classList.toggle('border-red-500', Boolean(message));",
            "            inputEl.classList.toggle('focus:border-red-500', Boolean(message));",
            "            inputEl.classList.toggle('focus:ring-red-100', Boolean(message));",
            "            inputEl.classList.toggle('border-slate-200', !message);",
            "        }",
            "    };",
            "",
            "    const showStatus = (type, message) => {",
            "        if (!statusBox) {",
            "            return;",
            "        }",
            "",
            "        statusBox.className = `mt-4 rounded-2xl border px-4 py-3 text-sm font-medium ${type === 'success'",
            "            ? 'border-emerald-200 bg-emerald-50 text-emerald-700'",
            "            : 'border-red-200 bg-red-50 text-red-700'}`;",
            "        statusBox.textContent = message;",
            "        statusBox.classList.remove('hidden');",
            "    };",
            "",
            "    const clearStatus = () => {",
            "        if (statusBox) {",
            "            statusBox.classList.add('hidden');",
            "            statusBox.textContent = '';",
            "        }",
            "    };",
            "",
            "    const validate = () => {",
            "        const values = {",
            "            name: fields.name.value.trim(),",
            "            email: fields.email.value.trim(),",
            "            subject: fields.subject.value.trim(),",
            "            message: fields.message.value.trim()",
            "        };",
            "",
            "        let isValid = true;",
            "",
            "        if (values.name.length < 2) {",
            "            setError('name', 'Please enter your full name.');",
            "            isValid = false;",
            "        } else {",
            "            setError('name', '');",
            "        }",
            "",
            "        if (!emailPattern.test(values.email)) {",
            "            setError('email', 'Please enter a valid email address.');",
            "            isValid = false;",
            "        } else {",
            "            setError('email', '');",
            "        }",
            "",
            "        if (values.subject.length < 3) {",
            "            setError('subject', 'Subject must be at least 3 characters.');",
            "            isValid = false;",
            "        } else {",
            "            setError('subject', '');",
            "        }",
            "",
            "        if (values.message.length < 10) {",
            "            setError('message', 'Message must be at least 10 characters.');",
            "            isValid = false;",
            "        } else {",
            "            setError('message', '');",
            "        }",
            "",
            "        return { isValid, values };",
            "    };",
            "",
            "    const saveSubmission = (payload) => {",
            "        const stored = JSON.parse(localStorage.getItem(storageKey) || '[]');",
            "        stored.unshift({",
            "            ...payload,",
            "            submittedAt: new Date().toISOString()",
            "        });",
            "        localStorage.setItem(storageKey, JSON.stringify(stored.slice(0, 20)));",
            "    };",
            "",
            "    const resetForm = () => {",
            "        form.reset();",
            "        Object.keys(errors).forEach((fieldName) => setError(fieldName, ''));",
            "    };",
            "",
            "    if (!form) {",
            "        return;",
            "    }",
            "",
            "    form.addEventListener('submit', (event) => {",
            "        event.preventDefault();",
            "        clearStatus();",
            "",
            "        const { isValid, values } = validate();",
            "        if (!isValid) {",
            "            showStatus('error', 'Please fix the highlighted fields and try again.');",
            "            return;",
            "        }",
            "",
            "        submitButton.disabled = true;",
            "        submitButton.textContent = 'Sending...';",
            "",
            "        window.setTimeout(() => {",
            "            saveSubmission(values);",
            "            resetForm();",
            "            showStatus('success', 'Your message has been submitted successfully. We will contact you soon.');",
            "            submitButton.disabled = false;",
            "            submitButton.textContent = 'Send Message';",
            "        }, 700);",
            "    });",
            "",
            "    Object.values(fields).forEach((field) => {",
            "        if (!field) {",
            "            return;",
            "        }",
            "",
            "        field.addEventListener('input', () => {",
            "            clearStatus();",
            "        });",
            "    });",
            "})();"
        ].join("\n"),
    },

// service.js
  {
    id: "service-js",
    title: "js/service.js",
    description: "Service-related logic for your static pages.",
    language: "javascript",
        code: [
            "(() => {",
            "    const renderServices = () => {",
            "        const grid = document.getElementById('servicesGrid');",
            "        if (!grid || !Array.isArray(window.servicesData)) {",
            "            return;",
            "        }",
            "",
            "        grid.innerHTML = window.servicesData.map((service, index) => `",
            "            <article class=\"rounded-3xl ${index % 2 === 0 ? 'bg-slate-950 text-white' : 'bg-white text-slate-900 ring-1 ring-slate-100'} p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow\">",
            "                <p class=\"text-sm font-semibold ${index % 2 === 0 ? 'text-brand-200' : 'text-brand-700'}\">${service.badge}</p>",
            "                <h3 class=\"mt-2 text-xl font-bold\">${service.title}</h3>",
            "                <p class=\"mt-4 text-sm leading-6 ${index % 2 === 0 ? 'text-white/75' : 'text-slate-500'}\">${service.description}</p>",
            "            </article>",
            "        `).join('');",
            "    };",
            "",
            "    document.addEventListener('DOMContentLoaded', renderServices);",
            "})();",
            "",
            ].join("\n"),
    },
  





];
