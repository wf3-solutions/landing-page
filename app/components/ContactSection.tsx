"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, Variants } from "framer-motion"
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react"

// Configuração da animação
const containerVariants: Variants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.2, // Atraso de 0.2s entre o texto e o form
		},
	},
}

const itemVariants: Variants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.6, ease: "easeOut" },
	},
}

export default function ContactSection() {
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [errorMessage, setErrorMessage] = useState("")

	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault()
		setIsSubmitting(true)
		setErrorMessage("")

		const formData = new FormData(event.currentTarget)
		const data = Object.fromEntries(formData.entries())

		const controller = new AbortController()
		const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 segundos limite

		try {
			const response = await fetch("https://formsubmit.co/ajax/wf3solutions@gmail.com", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify(data),
				signal: controller.signal,
			})

			const result = await response.json()

			if (response.ok) {
				setIsSuccess(true)
			} else {
				setErrorMessage(result.message || "Ocorreu um erro ao enviar. Tente novamente.")
			}
		} catch (error: unknown) {
			console.error("Erro no envio:", error)
			if (error instanceof Error && error.name === "AbortError") {
				setErrorMessage("O envio demorou muito. Verifique sua conexão.")
			} else {
				setErrorMessage("Erro de conexão. Verifique se não há bloqueadores de anúncio impedindo o envio.")
			}
		} finally {
			clearTimeout(timeoutId)
			setIsSubmitting(false)
		}
	}

	const handleReset = () => {
		setIsSuccess(false)
		setErrorMessage("")
		setIsSubmitting(false)
	}

	return (
		<section id="contact" className="w-full min-h-screen bg-background py-20 flex items-center justify-center px-4">
			<motion.div
				variants={containerVariants}
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.2 }}
				className="w-full max-w-7xl bg-muted/30 p-6 md:p-10 shadow-lg rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-12"
			>
				<motion.div variants={itemVariants} className="flex mt-[-2rem] flex-col justify-center gap-2 text-center md:text-left">
					<h1 className="text-[clamp(1rem,5vw,3rem)] font-bold leading-tight text-primary">Vamos conversar</h1>

					<p className="font-bold text-lg md:text-xl">Estamos aqui para ajudar você a crescer!</p>

					<p className="text-muted-foreground leading-relaxed max-w-md mx-auto md:mx-0">
						Preencha seus dados e nossa equipe entrará em contato.
					</p>
				</motion.div>

				<div className="relative min-h-[400px] flex flex-col justify-center">
					{isSuccess ? (
						<motion.div
							initial={{ opacity: 0, scale: 0.8 }}
							animate={{ opacity: 1, scale: 1 }}
							className="flex flex-col items-center justify-center text-center p-8 bg-background rounded-xl border border-primary/20 shadow-sm h-full"
						>
							<div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
								<CheckCircle2 className="w-10 h-10 text-green-600" />
							</div>
							<h2 className="text-2xl font-bold text-primary mb-2">Mensagem Enviada!</h2>
							<p className="text-muted-foreground mb-8 max-w-xs">
								Obrigado pelo contato. Nossa equipe analisará sua solicitação e responderá em breve.
							</p>
							<Button variant="outline" onClick={handleReset} className="min-w-[200px]">
								Enviar nova mensagem
							</Button>
						</motion.div>
					) : (
						<motion.form
							variants={itemVariants}
							initial="hidden"
							animate="visible"
							onSubmit={handleSubmit}
							className="grid grid-cols-1 sm:grid-cols-2 gap-6"
						>
							<input type="hidden" name="_captcha" value="false" />
							<input type="hidden" name="_template" value="box" />
							<input type="hidden" name="_subject" value="Novo contato pelo site!" />

							<div className="flex flex-col col-span-1">
								<label className="text-sm font-medium">Nome*</label>
								<input
									type="text"
									name="nome"
									required
									disabled={isSubmitting}
									className="w-full border rounded-lg px-3 h-12 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:opacity-50"
								/>
							</div>

							<div className="flex flex-col col-span-1">
								<label className="text-sm font-medium">Sobrenome*</label>
								<input
									type="text"
									name="sobrenome"
									required
									disabled={isSubmitting}
									className="w-full border rounded-lg px-3 h-12 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:opacity-50"
								/>
							</div>

							<div className="flex flex-col col-span-1 sm:col-span-2">
								<label className="text-sm font-medium">Número de telefone*</label>
								<input
									type="tel"
									name="telefone"
									required
									disabled={isSubmitting}
									className="w-full border rounded-lg px-3 h-12 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:opacity-50"
								/>
							</div>

							<div className="flex flex-col col-span-1 sm:col-span-2">
								<label className="text-sm font-medium">E-mail*</label>
								<input
									type="email"
									name="email"
									required
									disabled={isSubmitting}
									className="w-full border rounded-lg px-3 h-12 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:opacity-50"
								/>
							</div>

							<div className="flex flex-col col-span-1 sm:col-span-2">
								<label className="text-sm font-medium">Nome da empresa*</label>
								<input
									type="text"
									name="empresa"
									required
									disabled={isSubmitting}
									className="w-full border rounded-lg px-3 h-12 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:opacity-50"
								/>
							</div>

							<div className="flex flex-col col-span-1 sm:col-span-2">
								<label className="text-sm font-medium">Cargo</label>
								<select
									name="cargo"
									disabled={isSubmitting}
									className="w-full border rounded-lg px-3 h-12 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:opacity-50"
								>
									<option value="">Selecione</option>
									<option>CEO</option>
									<option>Gerente</option>
									<option>Analista</option>
								</select>
							</div>

							<div className="flex flex-col col-span-1 sm:col-span-2">
								<label className="text-sm font-medium">Qual solução você está buscando hoje?*</label>
								<select
									name="solucao"
									required
									disabled={isSubmitting}
									className="w-full border rounded-lg px-3 h-12 bg-background focus:ring-2 focus:ring-primary focus:outline-none transition-all disabled:opacity-50"
								>
									<option value="">Selecione</option>
									<option>Desenvolvimento de App</option>
									<option>Site / Landing Page</option>
									<option>Sistema Corporativo</option>
								</select>
							</div>

							<div className="col-span-1 sm:col-span-2 mt-4 flex flex-col gap-3">
								<Button
									type="submit"
									variant="secondary"
									disabled={isSubmitting}
									className="w-full h-12 text-base md:text-lg hover:scale-[1.02] transition-transform active:scale-95 disabled:scale-100 disabled:opacity-70"
								>
									{isSubmitting ? (
										<>
											<Loader2 className="mr-2 h-4 w-4 animate-spin" /> Enviando...
										</>
									) : (
										"Enviar"
									)}
								</Button>

								{errorMessage && (
									<p className="text-red-500 text-sm flex items-center justify-center gap-2 mt-2 animate-in fade-in slide-in-from-top-1">
										<AlertCircle size={16} />
										{errorMessage}
									</p>
								)}
							</div>
						</motion.form>
					)}
				</div>
			</motion.div>
		</section>
	)
}
