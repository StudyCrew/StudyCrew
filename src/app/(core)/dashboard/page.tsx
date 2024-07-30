import MaterialComponent from '@/components/widgets/MaterialComponent'
import { MaterialType } from '../../../../types'

export default function Dashboard(): JSX.Element {
  return (
    <div>
      <MaterialComponent type={MaterialType.Powerpoint} user={"Mohit Kamlesh Panchal AKSDJLK:AS"} date={new Date()} link={"https://youtu.be/aoB2CiFNGdc?si=dA_2933_oOypEBfj"} title={"Homework"} websiteLink={"/groups"}/>
    </div>
  )
}