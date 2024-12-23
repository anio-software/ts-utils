import type {Instance} from "./Instance.d.mts"
import type {Import} from "./Import.d.mts"

import {getImports} from "./getImports.mts"

export function getImportByIdentifier(
	inst: Instance,
	identifier: string,
	kind: "type-only" | "value-only" | "dont-care" = "dont-care"
) : Import|null {
	for (const imp of getImports(inst)) {
		if (imp.identifier !== identifier) continue

		if (kind === "dont-care") {
			return imp
		} else if (kind === "type-only" && imp.is_type_only) {
			return imp
		} else if (kind === "value-only" && !imp.is_type_only) {
			return imp
		}
	}

	return null
}
