
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'vt323': ['VT323', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
			},
			colors: {
				'cyber-bg': '#0a0a0a',
				'cyber-text': '#EAEAEA',
				'cyber-neon': '#7FFF00',
				'cyber-blue': '#00D9FF',
				'cyber-purple': '#B347D9',
				'cyber-pink': '#FF0080',
				'cyber-orange': '#FF6B35',
				'cyber-card': '#1E1E1E',
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'glow': {
					'0%, 100%': { 
						textShadow: '0 0 5px #7FFF00, 0 0 10px #7FFF00, 0 0 15px #7FFF00' 
					},
					'50%': { 
						textShadow: '0 0 10px #7FFF00, 0 0 20px #7FFF00, 0 0 30px #7FFF00' 
					}
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'matrix-rain': {
					'0%': { transform: 'translateY(-100vh)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(100vh)', opacity: '0' }
				},
				'circuit-flow': {
					'0%': { strokeDashoffset: '1000' },
					'100%': { strokeDashoffset: '0' }
				},
				'holographic': {
					'0%': { background: 'linear-gradient(45deg, #7FFF00, #00D9FF)' },
					'25%': { background: 'linear-gradient(45deg, #00D9FF, #B347D9)' },
					'50%': { background: 'linear-gradient(45deg, #B347D9, #FF0080)' },
					'75%': { background: 'linear-gradient(45deg, #FF0080, #FF6B35)' },
					'100%': { background: 'linear-gradient(45deg, #FF6B35, #7FFF00)' }
				},
				'border-run': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(100vw)' }
				},
				'scanner': {
					'0%': { transform: 'translateY(-100vh)' },
					'100%': { transform: 'translateY(100vh)' }
				},
				'particle': {
					'0%': { transform: 'translate(0, 100vh) scale(0)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translate(0, -100vh) scale(1)', opacity: '0' }
				},
				'typing': {
					'from': { width: '0' },
					'to': { width: '100%' }
				},
				'blink': {
					'0%, 50%': { borderColor: '#7FFF00' },
					'51%, 100%': { borderColor: 'transparent' }
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			},
			animation: {
				'glow': 'glow 2s ease-in-out infinite',
				'glitch': 'glitch 0.3s infinite',
				'float': 'float 3s ease-in-out infinite',
				'matrix-rain': 'matrix-rain 3s linear infinite',
				'circuit-flow': 'circuit-flow 2s linear infinite',
				'holographic': 'holographic 3s ease-in-out infinite',
				'border-run': 'border-run 2s linear infinite',
				'scanner': 'scanner 4s linear infinite',
				'particle': 'particle 6s linear infinite',
				'typing': 'typing 2s steps(20) 1s forwards',
				'blink': 'blink 1s infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			dropShadow: {
				'neon': '0 0 5px #7FFF00',
				'neon-lg': '0 0 20px #7FFF00',
				'neon-blue': '0 0 20px #00D9FF',
				'neon-purple': '0 0 20px #B347D9',
				'neon-pink': '0 0 20px #FF0080',
			},
			boxShadow: {
				'neon': '0 0 20px #7FFF00',
				'neon-blue': '0 0 20px #00D9FF',
				'neon-purple': '0 0 20px #B347D9',
				'neon-pink': '0 0 20px #FF0080',
				'holographic': '0 0 40px rgba(127, 255, 0, 0.3), inset 0 0 40px rgba(0, 217, 255, 0.1)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
