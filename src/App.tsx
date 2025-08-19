import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import { ChartContainer, ChartLegend, ChartTooltip, ChartTooltipContent, type ChartConfig } from "./components/ui/chart";
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "./components/ui/card";
import { TrendingUp } from "lucide-react";

export function App() {
    const chartData = [
        { month: "Janeiro", bot: 186, atendentes: 80 },
        { month: "Fevereiro", bot: 305, atendentes: 200 },
        { month: "Março", bot: 237, atendentes: 120 },
        { month: "Abril", bot: 73, atendentes: 190 },
        { month: "Maio", bot: 209, atendentes: 130 },
        { month: "Junho", bot: 214, atendentes: 140 },
    ]

    const chartConfig = {
        desktop: {
            label: "Desktop",
            color: "#2563eb",
        },
        mobile: {
            label: "Mobile",
            color: "#60a5fa",
        },
    } satisfies ChartConfig

 return (
    <div className="p-6 max-w-4xl mx-auto">
        <Card>
            <CardHeader>
                <CardTitle>Atendimentos mensais</CardTitle>
                <CardDescription>2025</CardDescription>
            </CardHeader>
            <ChartContainer config={chartConfig}>
                <BarChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis dataKey="month" tickLine={false} tickMargin={10} axisLine={false} tickFormatter={(value) => value.slice(0,3)}/>
                    <YAxis axisLine={true}/>
                    <ChartTooltip cursor={false} content={<ChartTooltipContent indicator="dashed"/>}/>
                    <Bar dataKey="bot" fill="var(--chart-2)" radius={5} />
                    <Bar dataKey="atendentes" fill="var(--chart-3)" radius={5}/>
                    <ChartLegend />
                </BarChart>
            </ChartContainer>
            <CardFooter className="flex-col items-start gap-2 text-sm">
                <div className="flex gap-2 leading-none font-medium">
                Tendência em crescimento de 5.2% este mês <TrendingUp className="h-4 w-4" />
                </div>
                <div className="text-muted-foreground leading-none">
                Exibindo o total de atendimentos em 2025 até o momento
                </div>
            </CardFooter>
        </Card>
    </div>
 )
}