interface Rect {
  readonly id: string
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '123',
  size: {
    width: 124,
    height: 142
  },
  color: '#ccc'
}

const rect2: Rect = {
  id: '123afsf',
  size: {
    width: 112424,
    height: 112442
  },
}

rect2.color = 'black'

const rect3 = {} as Rect
const rect4 = <Rect>{}

// =================

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123afqwesf',
  size: {
    width: 112124424,
    height: 11124122442
  },
  getArea(): number {
    return this.size.width * this.size.height
  }
}

// =================

interface IClock {
  time: Date

  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()

  setTime(date: Date): void {
    this.time = date
  }
}

// =================

interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px'
}