// import { useTheme } from 'app/state/application/hooks'
// import { useEffect } from 'react'
import Color from 'color'

type ColorNode = {
  name: string
  variable: string
  value: string | Color
}

const ThemeGenerator = () => {
  //   const theme = useTheme()
  //   useEffect(() => {}, [theme])

  function getColorValueFromTheme(variable: string) {
    return Color(`hsl(${getComputedStyle(document.documentElement).getPropertyValue(variable)})`).hex()
  }

  const requiredColorNames: string[] = [
    'primary',
    'secondary',
    'accent',
    'neutral',
    'base-100',
    'info',
    'success',
    'warning',
    'error',
  ]

  const colors: ColorNode[] = [
    {
      name: 'primary',
      variable: '--p',
      value: getColorValueFromTheme('--p'),
    },
    {
      name: 'primary-focus',
      variable: '--pf',
      value: getColorValueFromTheme('--pf'),
    },
    {
      name: 'primary-content',
      variable: '--pc',
      value: getColorValueFromTheme('--pc'),
    },
    {
      name: 'secondary',
      variable: '--s',
      value: getColorValueFromTheme('--s'),
    },
    {
      name: 'secondary-focus',
      variable: '--sf',
      value: getColorValueFromTheme('--sf'),
    },
    {
      name: 'secondary-content',
      variable: '--sc',
      value: getColorValueFromTheme('--sc'),
    },
    {
      name: 'accent',
      variable: '--a',
      value: getColorValueFromTheme('--a'),
    },
    {
      name: 'accent-focus',
      variable: '--af',
      value: getColorValueFromTheme('--af'),
    },
    {
      name: 'accent-content',
      variable: '--ac',
      value: getColorValueFromTheme('--ac'),
    },
    {
      name: 'neutral',
      variable: '--n',
      value: getColorValueFromTheme('--n'),
    },
    {
      name: 'neutral-focus',
      variable: '--nf',
      value: getColorValueFromTheme('--nf'),
    },
    {
      name: 'neutral-content',
      variable: '--nc',
      value: getColorValueFromTheme('--nc'),
    },
    {
      name: 'base-100',
      variable: '--b1',
      value: getColorValueFromTheme('--b1'),
    },
    {
      name: 'base-200',
      variable: '--b2',
      value: getColorValueFromTheme('--b2'),
    },
    {
      name: 'base-300',
      variable: '--b3',
      value: getColorValueFromTheme('--b3'),
    },
    {
      name: 'base-content',
      variable: '--bc',
      value: getColorValueFromTheme('--bc'),
    },
    {
      name: 'info',
      variable: '--in',
      value: getColorValueFromTheme('--in'),
    },
    {
      name: 'info-content',
      variable: '--inc',
      value: getColorValueFromTheme('--inc'),
    },
    {
      name: 'success',
      variable: '--su',
      value: getColorValueFromTheme('--su'),
    },
    {
      name: 'success-content',
      variable: '--suc',
      value: getColorValueFromTheme('--suc'),
    },
    {
      name: 'warning',
      variable: '--wa',
      value: getColorValueFromTheme('--wa'),
    },
    {
      name: 'warning-content',
      variable: '--wac',
      value: getColorValueFromTheme('--wac'),
    },
    {
      name: 'error',
      variable: '--er',
      value: getColorValueFromTheme('--er'),
    },
    {
      name: 'error-content',
      variable: '--erc',
      value: getColorValueFromTheme('--erc'),
    },
  ]

  function darken(name: string, variable: string, source: string, percentage = 0.2): ColorNode {
    return {
      name: name,
      variable: variable,
      value: Color(colors.find((item) => item.name === source)!.value)
        .darken(percentage)
        .hex(),
    }
  }

  function contrastMaker(name: string, variable: string, source: string, percentage = 0.8): ColorNode {
    const currentColor: ColorNode = colors.find((item) => item.name === source)!
    const mixColor = Color(currentColor.value).isDark() ? 'white' : 'black'
    return {
      name: name,
      variable: variable,
      value: Color(currentColor.value).mix(Color(mixColor), percentage).saturate(10),
    }
  }

  function generateOptionalColors() {
    let optionalColors = []
    optionalColors.push(darken("primary-focus", "--pf", "primary"))
    optionalColors.push(darken("secondary-focus", "--sf", "secondary"))
    optionalColors.push(darken("accent-focus", "--af", "accent"))
    optionalColors.push(darken("neutral-focus", "--nf", "neutral"))

    optionalColors.push(darken("base-200", "--b2", "base-100", 0.1))
    optionalColors.push(darken("base-300", "--b3", "base-100", 0.2))
    optionalColors.push(contrastMaker("base-content", "--bc", "base-100"))

    optionalColors.push(contrastMaker("primary-content", "--pc", "primary"))
    optionalColors.push(contrastMaker("secondary-content", "--sc", "secondary"))
    optionalColors.push(contrastMaker("accent-content", "--ac", "accent"))
    optionalColors.push(contrastMaker("neutral-content", "--nc", "neutral"))

    optionalColors.push(contrastMaker("info-content", "--inc", "info"))
    optionalColors.push(contrastMaker("success-content", "--suc", "success"))
    optionalColors.push(contrastMaker("warning-content", "--wac", "warning"))
    optionalColors.push(contrastMaker("error-content", "--erc", "error"))
    return optionalColors
  }

  function generateColors(newColorToCheck = "transparent") {
    if (CSS.supports("color", newColorToCheck)) {
      colors
        .filter((item) => requiredColorNames.includes(item.name))
        .forEach((color) => {
          let hslValue = Color(color.value).hsl().round().array()
          // wrapper.style.setProperty(color.variable, hslValue[0] + " " + hslValue[1] + "% " + hslValue[2] + "%")
        })
      generateOptionalColors().forEach((color) => {
        let hslValue = Color(color.value).hsl().round().array()
        // wrapper.style.setProperty(color.variable, hslValue[0] + " " + hslValue[1] + "% " + hslValue[2] + "%")
      })
      localStorage.setItem("daisyui-theme-generator-colors", JSON.stringify(colors))
    } else {
      console.log(`${newColorToCheck} is not a valid color`)
    }
  }

  return (
    <div data-theme="metapop">
      <div>
        <span className="badge relative top-4 bg-primary"></span>
        <span className="font-mono font-bold">primary</span>
      </div>
      <div className="bg-base-300 p-8">
        bg-base-300
        <div className="p-4 bg-base-100">
          bg-base-100
          <div className="p-4 bg-base-300">
            bg-base-300
            <div className="p-4 bg-base-100">
              bg-base-100
              <div className="p-4 bg-base-200">bg-base-200</div>
            </div>
          </div>
        </div>
        <div className="p-2 bg-base-content"></div>
      </div>
      <h2 className="px-2 pb-4 text-xl font-bold">Preview</h2>
      <div
        className="rounded-box bg-base-100 border-base-content/5 text-base-content not-prose grid gap-3 border p-6"
        data-theme="mytheme"
      >
        {/* button */}
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          <button className="btn">Default</button>
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-info">Info</button>
          <button className="btn btn-success">Success</button>
          <button className="btn btn-warning">Warning</button>
          <button className="btn btn-error">Error</button>
        </div>
        {/* badge */}
        <div className="grid grid-cols-2 place-items-center gap-2 md:grid-cols-4">
          <span className="badge">Default</span>
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-accent">Accent</span>
          <span className="badge badge-info">Info</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-error">Error</span>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="md:w-1/2">
              {/* tabs */}
              <div className="tabs">
                <button className="tab tab-lifted">Tab</button>
                <button className="tab tab-lifted tab-active">Tab</button>
                <button className="tab tab-lifted">Tab</button>
              </div>
              {/* link */}
              <div className="flex flex-col">
                <span className="link">I'm a simple link</span>
                <span className="link link-primary">I'm a simple link</span>
                <span className="link link-secondary">I'm a simple link</span>
                <span className="link link-accent">I'm a simple link</span>
              </div>
            </div>
            <div className="flex flex-col gap-3 md:w-1/2">
              <progress value="20" max="100" className="progress">
                Default
              </progress>
              <progress value="25" max="100" className="progress progress-primary">
                Primary
              </progress>
              <progress value="30" max="100" className="progress progress-secondary">
                Secondary
              </progress>
              <progress value="40" max="100" className="progress progress-accent">
                Accent
              </progress>
              <progress value="45" max="100" className="progress progress-info">
                Info
              </progress>
              <progress value="55" max="100" className="progress progress-success">
                Success
              </progress>
              <progress value="70" max="100" className="progress progress-warning">
                Warning
              </progress>
              <progress value="90" max="100" className="progress progress-error">
                Error
              </progress>
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row">
            {/* stat */}
            <div className="stats bg-base-300 border-base-300 border md:w-1/2">
              <div className="stat">
                <div className="stat-title">Total Page Views</div>
                <div className="stat-value">89,400</div>
                <div className="stat-desc">21% more than last month</div>
              </div>
            </div>

            {/* radial progress */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:w-1/2">
              <div className="radial-progress" style="--value:60;--size:3.5rem">60%</div>
              <div className="radial-progress" style="--value:75;--size:3.5rem">75%</div>
              <div className="radial-progress" style="--value:90;--size:3.5rem">90%</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="md:w-1/2">
              {/* toggle */}
              <div>
                <input type="checkbox" className="toggle" checked />
                <input type="checkbox" className="toggle toggle-primary" checked />
                <input type="checkbox" className="toggle toggle-secondary" checked />
                <input type="checkbox" className="toggle toggle-accent" checked />
              </div>
              {/* checkbox */}
              <div>
                <input type="checkbox" className="checkbox" checked />
                <input type="checkbox" className="checkbox checkbox-primary" checked />
                <input type="checkbox" className="checkbox checkbox-secondary" checked />
                <input type="checkbox" className="checkbox checkbox-accent" checked />
              </div>
              {/* radio */}
              <div>
                <input type="radio" name="radio-1" className="radio" checked />
                <input type="radio" name="radio-1" className="radio radio-primary" />
                <input type="radio" name="radio-1" className="radio radio-secondary" />
                <input type="radio" name="radio-1" className="radio radio-accent" />
              </div>
            </div>
            {/* range */}
            <div className="md:w-1/2">
              <input type="range" min="0" max="100" value="90" className="range range-xs" />
              <input type="range" min="0" max="100" value="70" className="range range-xs range-primary" />
              <input type="range" min="0" max="100" value="50" className="range range-xs range-secondary" />
              <input type="range" min="0" max="100" value="40" className="range range-xs range-accent" />
            </div>
          </div>
          {/* input */}
          <div className="flex flex-col gap-3 md:flex-row">
            <div className="flex flex-col gap-3 md:w-1/2">
              <input type="text" placeholder="Default" className="input input-bordered w-full" />
              <input type="text" placeholder="Primary" className="input input-primary input-bordered w-full" />
              <input type="text" placeholder="Secondary" className="input input-secondary input-bordered w-full" />
              <input type="text" placeholder="Accent" className="input input-accent input-bordered w-full" />
            </div>
            <div className="flex flex-col gap-3 md:w-1/2">
              <input type="text" placeholder="Info" className="input input-info input-bordered w-full" />
              <input type="text" placeholder="Success" className="input input-success input-bordered w-full" />
              <input type="text" placeholder="Warning" className="input input-warning input-bordered w-full" />
              <input type="text" placeholder="Error" className="input input-error input-bordered w-full" />
            </div>
          </div>
          {/* navbar */}
          <div className="navbar bg-neutral text-neutral-content rounded-box">
            <div className="flex-none">
              <button className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-5 w-5 stroke-current"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
            <div className="flex-1">
              <button className="btn btn-ghost text-xl normal-case">daisyUI</button>
            </div>
          </div>
          <div className="flex gap-3">
            {/* headings */}
            <div className="flex flex-grow flex-col gap-3">
              <div className="text-4xl font-bold">Text Size 1</div>
              <div className="text-3xl font-bold">Text Size 2</div>
              <div className="text-2xl font-bold">Text Size 3</div>
              <div className="text-xl font-bold">Text Size 4</div>
              <div className="text-lg font-bold">Text Size 5</div>
              <div className="text-sm font-bold">Text Size 6</div>
              <div className="text-xs font-bold">Text Size 7</div>
            </div>
            {/* step */}
            <ul className="steps steps-vertical">
              <li className="step step-primary">Step 1</li>
              <li className="step step-primary">Step 2</li>
              <li className="step">Step 3</li>
              <li className="step">Step 4</li>
            </ul>
          </div>
        </div>

        {/* alert */}
        <div className="flex flex-col gap-3">
          <div className="alert">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-info h-6 w-6 flex-shrink-0"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>12 unread messages. Tap to see.</span>
            </div>
          </div>
          <div className="alert alert-info">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-6 w-6 flex-shrink-0 stroke-current"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>New software update available.</span>
            </div>
          </div>
          <div className="alert alert-success">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Your purchase has been confirmed!</span>
            </div>
          </div>
          <div className="alert alert-warning">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
              <span>Warning: Invalid email address!</span>
            </div>
          </div>
          <div className="alert alert-error">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 flex-shrink-0 stroke-current"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>Error! Task failed successfully.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThemeGenerator
