'use client'

import { TrendingUp } from 'lucide-react'
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from '@/components/ui/chart'
const chartData = [
  { year: '1950', desktop: 8 },
  { year: '1960', desktop: 9 },
  { year: '1970', desktop: 10 },
  { year: '1980', desktop: 11.3 },
  { year: '1990', desktop: 12.5 },
  { year: '1990', desktop: 12.4 },
  { year: '2000', desktop: 13.1 },
  { year: '2000', desktop: 16.5 },
  { year: '2000', desktop: 20.6 },
  { year: '2000', desktop: 21.6 },
  { year: '2024', desktop: 22 },
]

const chartConfig = {
  desktop: {
    label: 'Older Adults:',
    color: 'hsl(var(--chart-2))',
  },
} satisfies ChartConfig

export default function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Percentage of population comprised of older adults </CardTitle>
        <CardDescription>
          <p className="mr-16">
            Adults over the age of 65 are projected to make up more than 20% of the population by
            2030 and will comprise more than 25% of the population in rural areas by 2040.{' '}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 3,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis dataKey="year" tickLine={true} axisLine={true} tickMargin={8} />
            <ChartTooltip
              cursor={true}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="var(--color-desktop)"
              fillOpacity={0.2}
              stroke="var(--color-desktop)"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
      {/* <CardFooter> */}
      {/* <div className="flex w-full items-start gap-2 text-sm">
          <div className="grid gap-2">
            <div className="flex items-center gap-2 font-medium leading-none">
              {/* <TrendingUp className="h-4 w-4" /> 
            </div>
            <div className="flex	items-center gap-2 leading-none text-slate-400 dark:text-slate-200"></div>
          </div>
        </div> */}
      {/* </CardFooter> */}
    </Card>
  )
}
