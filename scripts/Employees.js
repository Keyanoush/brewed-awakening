import { getEmployees } from "./database.js"
import { getOrders } from "./database.js"

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("employee")) {
            const [, employeeId] = itemClicked.id.split("--")
            const employeeIdNumber = parseInt(employeeId)

            const orders = getOrders()
            let counter = 0
            const employees = getEmployees()

            for (const orderobject of orders) {
                if (orderobject.employeeId === employeeIdNumber) {
                    counter++

                }
            }
            for (const employeename of employees) {
                if (employeename.id === employeeIdNumber) {
                    window.alert(`${employee.name} sold ${counter} products`)
                }
            }

        }
    }
)

const employees = getEmployees()

export const Employees = () => {
    let html = "<ul>"

    for (const employee of employees) {
        html += `<li id="employee--${employee.Id}">${employee.name}</li>`
    }

    html += "</ul>"

    return html
}

